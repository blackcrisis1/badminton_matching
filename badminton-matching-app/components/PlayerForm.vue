<template>
  <form @submit.prevent="handleSubmit">
    <label for="players">กรอกชื่อผู้เล่น (1 คนต่อ 1 บรรทัด):</label>
    <textarea
      id="players"
      v-model="playersInput"
      rows="7"
      placeholder=""
    ></textarea>
    <button type="submit">จับคู่</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useMatching } from '@/composables/useMatching'

const playersInput = ref('')
const { matchPlayers } = useMatching()

function handleSubmit() {
  // แยกชื่อผู้เล่นแต่ละบรรทัด ตัดเลขและจุดออก
  const players = playersInput.value
    .split('\n')
    .map(line => line.replace(/^\d+\./, '').trim())
    .filter(name => name.length > 0)
  matchPlayers(players)
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
textarea {
  width: 300px;
  margin: 10px 0;
  resize: vertical;
}
button {
  padding: 6px 16px;
}
</style>