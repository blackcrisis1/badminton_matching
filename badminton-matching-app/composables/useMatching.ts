interface MatchHistory {
  [key: string]: { [opponent: string]: number }
}

interface MatchResult {
  pairs: string[]
  remaining: string[]
  totalRounds: number
}

const matchedPlayers = ref<string[]>([])
const matchHistory = reactive<any>({})
const currentRound = ref(1)

export function useMatching() {
  // ฟังก์ชันสุ่มแบบ Fisher-Yates
  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array] as any
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // ฟังก์ชันบันทึกประวัติการจับคู่ (นับจำนวนครั้งที่เจอกัน)
  function recordMatch(player1: string, player2: string): void {
    if (!matchHistory[player1]) matchHistory[player1] = {}
    if (!matchHistory[player2]) matchHistory[player2] = {}

    matchHistory[player1][player2] = (matchHistory[player1][player2] || 0) + 1
    matchHistory[player2][player1] = (matchHistory[player2][player1] || 0) + 1
  }

  // ฟังก์ชันหาคู่ที่เหมาะสมที่สุด (weighted + fairness)
  function findBestMatch(player: string, availablePlayers: string[]): string | null {
    if (availablePlayers.length === 0) return null

    const candidates = availablePlayers.map(p => {
      const times = matchHistory[player]?.[p] || 0
      return { player: p, times }
    }) as any

    // เรียงตามจำนวนครั้งที่เจอน้อยสุด
    candidates.sort((a:any, b:any) => a.times - b.times)

    // เลือกจากกลุ่มที่เจอน้อยที่สุด (สุ่มถ้ามีหลายตัวเลือก)
    const minTimes = candidates[0].times
    const bestOptions = candidates.filter((c:any) => c.times === minTimes)

    return bestOptions[Math.floor(Math.random() * bestOptions.length)].player
  }

  // ฟังก์ชันจับคู่แบบอัจฉริยะ (อัปเกรด)
  function matchPlayersIntelligent(players: string[]): MatchResult {
    const shuffled = shuffleArray(players)
    const pairs: string[] = []
    const remaining: string[] = []
    const used = new Set<string>()

    for (const player of shuffled) {
      if (used.has(player)) continue

      const availablePlayers = shuffled.filter(p => p !== player && !used.has(p))
      const bestMatch = findBestMatch(player, availablePlayers)

      if (bestMatch) {
        pairs.push(`${player} - ${bestMatch}`)
        recordMatch(player, bestMatch)
        used.add(player)
        used.add(bestMatch)
      } else {
        remaining.push(player)
      }
    }

    return {
      pairs,
      remaining,
      totalRounds: currentRound.value
    }
  }

  // ฟังก์ชันจับคู่แบบสุ่มธรรมดา
  function matchPlayersRandom(players: string[]): MatchResult {
    const shuffled = shuffleArray(players) as any
    const pairs: string[] = []
    const remaining: string[] = []

    for (let i = 0; i < shuffled.length; i += 2) {
      if (shuffled[i + 1]) {
        pairs.push(`${shuffled[i]} - ${shuffled[i + 1]}`)
        recordMatch(shuffled[i], shuffled[i + 1])
      } else {
        remaining.push(shuffled[i])
      }
    }

    return {
      pairs,
      remaining,
      totalRounds: currentRound.value
    }
  }

  // ฟังก์ชันจับคู่แบบรอบโรบิน
  function matchPlayersRoundRobin(players: string[], roundNumber: number = 1): MatchResult {
    const pairs: string[] = []
    const remaining: string[] = []
    const n = players.length

    if (n < 2) {
      return { pairs: [], remaining: [...players], totalRounds: 1 }
    }

    const adjustedPlayers = n % 2 === 0 ? [...players] : [...players, 'BYE']
    const totalPlayers = adjustedPlayers.length
    const effectiveRound = ((roundNumber - 1) % (totalPlayers - 1)) + 1

    for (let i = 0; i < totalPlayers / 2; i++) {
      let player1Index: number
      let player2Index: number

      if (i === 0) {
        player1Index = 0
        player2Index = effectiveRound
      } else {
        player1Index = ((effectiveRound - i - 1 + totalPlayers) % totalPlayers)
        player2Index = ((effectiveRound + i - 1) % totalPlayers)
      }

      const player1 = adjustedPlayers[player1Index] as any
      const player2 = adjustedPlayers[player2Index] as any

      if (player1 !== 'BYE' && player2 !== 'BYE') {
        pairs.push(`${player1} - ${player2}`)
        recordMatch(player1, player2)
      } else if (player1 === 'BYE') {
        remaining.push(player2)
      } else if (player2 === 'BYE') {
        remaining.push(player1)
      }
    }

    return {
      pairs,
      remaining,
      totalRounds: totalPlayers - 1
    }
  }

  // ฟังก์ชันหลักสำหรับจับคู่
  function matchPlayers(
    players: string[],
    mode: 'random' | 'intelligent' | 'round-robin' = 'intelligent'
  ): void {
    if (players.length === 0) {
      matchedPlayers.value = []
      return
    }

    let result: MatchResult

    switch (mode) {
      case 'random':
        result = matchPlayersRandom(players)
        break
      case 'round-robin':
        result = matchPlayersRoundRobin(players, currentRound.value)
        break
      case 'intelligent':
      default:
        result = matchPlayersIntelligent(players)
        break
    }

    matchedPlayers.value = [
      ...result.pairs,
      ...result.remaining.map(player => `${player} (ไม่มีคู่)`)
    ]

    currentRound.value++
  }

  // ฟังก์ชันดูประวัติการจับคู่
  function getMatchHistory(): MatchHistory {
    return JSON.parse(JSON.stringify(matchHistory))
  }

  // ฟังก์ชันรีเซ็ตประวัติ
  function resetHistory(): void {
    Object.keys(matchHistory).forEach(key => {
      delete matchHistory[key]
    })
    currentRound.value = 1
  }

  // ฟังก์ชันดูสถิติ
  function getPlayerStats(playerName: string): {
    totalMatches: number
    partners: string[]
    roundsPlayed: number
  } {
    const partners = matchHistory[playerName]
      ? Object.keys(matchHistory[playerName])
      : []
    const totalMatches = partners.reduce(
      (sum, p) => sum + (matchHistory[playerName][p] || 0),
      0
    )
    return {
      totalMatches,
      partners,
      roundsPlayed: currentRound.value - 1
    }
  }

  return {
    matchedPlayers,
    matchPlayers,
    getMatchHistory,
    resetHistory,
    getPlayerStats,
    currentRound
  }
}
