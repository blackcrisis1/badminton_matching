<template>
  <nav class="sticky-navbar shadow-md">
    <!-- Add your navigation menu items here -->
    <ul class="flex items-center justify-between px-4 py-2">
      <span class="text-header-4">Badminton Matching App</span>
      <div class="flex items-center space-x-4">
        <UtilsColorModeButton />
      </div>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.sticky-navbar {
  position: sticky;
  top: 0;
  background-color: var(--color-bg);
  z-index: 1;
}
</style>
