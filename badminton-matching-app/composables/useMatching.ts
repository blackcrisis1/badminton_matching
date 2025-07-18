import { ref, reactive } from 'vue'

interface MatchHistory {
  [key: string]: Set<string>
}

interface MatchResult {
  pairs: string[]
  remaining: string[]
  totalRounds: number
}

const matchedPlayers = ref<string[]>([])
const matchHistory = reactive<MatchHistory>({})
const currentRound = ref(1)

export function useMatching() {
  // ฟังก์ชันสำหรับสุ่มอาเรย์แบบ Fisher-Yates
  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // ฟังก์ชันตรวจสอบว่าผู้เล่น 2 คนเคยจับคู่กันแล้วหรือไม่
  function hasPlayedTogether(player1: string, player2: string): boolean {
    return matchHistory[player1]?.has(player2) || false
  }

  // ฟังก์ชันบันทึกประวัติการจับคู่
  function recordMatch(player1: string, player2: string): void {
    if (!matchHistory[player1]) matchHistory[player1] = new Set()
    if (!matchHistory[player2]) matchHistory[player2] = new Set()
    
    matchHistory[player1].add(player2)
    matchHistory[player2].add(player1)
  }

  // ฟังก์ชันหาคู่ที่เหมาะสมที่สุดสำหรับผู้เล่น
  function findBestMatch(player: string, availablePlayers: string[]): string | null {
    // หาผู้เล่นที่ไม่เคยจับคู่ด้วยก่อน
    const neverPlayed = availablePlayers.filter(p => !hasPlayedTogether(player, p))
    
    if (neverPlayed.length > 0) {
      return neverPlayed[Math.floor(Math.random() * neverPlayed.length)]
    }
    
    // ถ้าเคยจับคู่กับทุกคนแล้ว ให้เลือกคนที่จับคู่น้อยที่สุด
    const playedCounts = availablePlayers.map(p => ({
      player: p,
      count: matchHistory[player]?.has(p) ? 1 : 0
    }))
    
    playedCounts.sort((a, b) => a.count - b.count)
    return playedCounts[0]?.player || null
  }

  // ฟังก์ชันจับคู่แบบอัจฉริยะ
  function matchPlayersIntelligent(players: string[]): MatchResult {
    const shuffled = shuffleArray(players)
    const pairs: string[] = []
    const remaining: string[] = []
    const used = new Set<string>()

    // พยายามจับคู่ให้ได้มากที่สุด
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
    const shuffled = shuffleArray(players)
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

  // ฟังก์ชันจับคู่แบบรอบโรบิน (ทุกคนได้เล่นกับทุกคน)
  function matchPlayersRoundRobin(players: string[], roundNumber: number = 1): MatchResult {
    const pairs: string[] = []
    const remaining: string[] = []
    const n = players.length

    if (n < 2) {
      return { pairs: [], remaining: [...players], totalRounds: 1 }
    }

    // สำหรับจำนวนผู้เล่นคี่ ให้เพิ่ม "BYE" player
    const adjustedPlayers = n % 2 === 0 ? [...players] : [...players, 'BYE']
    const totalPlayers = adjustedPlayers.length

    // คำนวณรอบการจับคู่
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

      const player1 = adjustedPlayers[player1Index]
      const player2 = adjustedPlayers[player2Index]

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
    return { ...matchHistory }
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
    const partners = matchHistory[playerName] ? Array.from(matchHistory[playerName]) : []
    return {
      totalMatches: partners.length,
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