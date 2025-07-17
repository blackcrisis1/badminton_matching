
<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      @click="isDark = !isDark"
    />

    <UButton
      v-text="'testColorMode'"
      color="primary"
      variant="outline"
    />

    <UTextarea
     v-text="'testColorMode'"
      color="primary"
      variant="outline"
    />
    <span>สวัสดีครับ</span>
    <span>Hello World</span>
    <template #fallback>
      <div class="size-8"></div>
    </template>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
      
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>
