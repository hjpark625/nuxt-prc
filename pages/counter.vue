<template>
  <!-- <ClientOnly fallback-tag="span" fallback="Loading Contents..."> -->
  <NuxtLayout name="default">
    <CounterContainer />
  </NuxtLayout>
  <!-- </ClientOnly> -->
</template>

<script lang="ts" setup>
import CounterContainer from '@/components/CounterContainer.vue'
</script>
