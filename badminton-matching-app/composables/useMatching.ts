import { ref } from 'vue'

const matchedPlayers = ref<string[]>([])

export function useMatching() {
  function matchPlayers(players: string[]) {
    // ตัวอย่าง: สุ่มจับคู่ทีละ 2 คน
    const shuffled = [...players].sort(() => Math.random() - 0.5)
    matchedPlayers.value = []
    for (let i = 0; i < shuffled.length; i += 2) {
      if (shuffled[i + 1]) {
        matchedPlayers.value.push(`${shuffled[i]} - ${shuffled[i + 1]}`)
      } else {
        matchedPlayers.value.push(`${shuffled[i]} (ไม่มีคู่)`)
      }
    }
  }

  return {
    matchedPlayers,
    matchPlayers
  }
}