<template>
  <UApp
    :toaster="{
      position: appConfig.toaster.position,
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
const appConfig = useAppConfig() as any;
</script>
