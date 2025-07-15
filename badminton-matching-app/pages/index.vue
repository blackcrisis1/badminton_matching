<template>
  <div>
    <h1>Badminton Matching App</h1>
    <PlayerForm />
    <div v-if="matchedPlayers.length">
      <h2>Matched Players:</h2>
      <ul>
        <li v-for="(player, index) in matchedPlayers" :key="index">{{ player }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import PlayerForm from '@/components/PlayerForm.vue'
import { ref } from 'vue'
import { useMatching } from '@/composables/useMatching'

const { matchedPlayers } = useMatching()
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>