<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <UtilsNavNavigationMenu></UtilsNavNavigationMenu>

    <main class="flex-1 p-6 overflow-auto">
      <slot />
    </main>
  </div>
</template>
