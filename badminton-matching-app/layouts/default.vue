<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen">
    <UtilsNavNavigationMenu></UtilsNavNavigationMenu>

    <main class="flex-1 p-6 overflow-auto h-screen">
      <slot />
    </main>
  </div>
</template>
