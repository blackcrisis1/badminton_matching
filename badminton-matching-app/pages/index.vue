<template>
  <div class="w-full flex flex-col gap-4">
    <PlayerForm />
    <div
      v-if="matchedPlayers.length"
      class="mt-4"
    >
      <h2 class="text-lg font-bold">Matched Players:</h2>
      <div class="flex flex-col gap-2 pt-2">
        <UAlert
          v-for="(player, index) in matchedPlayers"
          :key="index"
          color="success"
          variant="soft"
        >
          <template #title>
            <span class="text-lg font-medium">{{ player }}</span>
          </template>
        </UAlert>
      </div>
      <!-- <div class="columns-2 gap-4 pt-4">
        <UAlert
          v-for="(player, index) in matchedPlayers"
          :key="index"
          color="success"
          variant="soft"
          class="break-inside-avoid mb-4"
        >
          <template #title>
            <span class="text-lg font-medium">{{ player }}</span>
          </template>
        </UAlert>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import PlayerForm from "@/components/PlayerForm.vue";
import { ref } from "vue";
import { useMatching } from "@/composables/useMatching";

const { matchedPlayers } = useMatching();
</script>

<style scoped></style>
