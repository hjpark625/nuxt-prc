<template>
  <h1>HelloWorld!</h1>
</template>

<script lang="ts" setup>
useHead({
  title: 'HelloWorld!',
  meta: [{ name: 'description', content: 'HelloWorld Page' }]
})
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
