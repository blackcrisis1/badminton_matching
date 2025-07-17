<template>
  <div class="w-full mx-auto">
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col space-y-4"
    >
      <label
        for="players"
        class="font-bold"
        >กรอกชื่อผู้เล่น (1 คนต่อ 1 บรรทัด):</label
      >
      <UTextarea
        class="w-full"
        id="players"
        v-model="playersInput"
        rows="7"
        color="success"
      />
      <UButton
        type="button"
        @click="addPlayers"
        color="success"
        block
        >เพิ่มรายชื่อ</UButton
      >
      <div
        v-if="playersList.length > 0"
        class="space-y-2"
      >
        <div
          v-for="(player, idx) in playersList"
          :key="idx"
          class="flex items-center justify-between gap-3 rounded px-3 py-2"
        >
          <UCheckbox
            v-model="player.selected"
            :label="player.name"
            :id="'player-' + idx"
            color="success"
            size="lg"
          />
          <UButton
            type="button"
            color="error"
            variant="ghost"
            icon="i-heroicons-trash"
            @click="removePlayer(idx)"
            size="xs"
          >
            ลบ
          </UButton>
        </div>
      </div>
      <UButton
        type="submit"
        color="success"
        block
        v-if="playersList.length > 0"
        >จับคู่</UButton
      >
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMatching } from "@/composables/useMatching";

const playersInput = ref("");
const playersList = ref([]);

const { matchPlayers } = useMatching();

function addPlayers() {
  const names = playersInput.value
    .split("\n")
    .map((line) => line.replace(/^\d+\./, "").trim())
    .filter((name) => name.length > 0);
  // เพิ่มเฉพาะชื่อที่ยังไม่มีใน list
  names.forEach((name) => {
    if (!playersList.value.some((p) => p.name === name)) {
      playersList.value.push({ name, selected: true });
    }
  });
  playersInput.value = "";
}

function removePlayer(idx) {
  playersList.value.splice(idx, 1);
}

function handleSubmit() {
  const selectedPlayers = playersList.value
    .filter((p) => p.selected)
    .map((p) => p.name);
  matchPlayers(selectedPlayers);
}
</script>
