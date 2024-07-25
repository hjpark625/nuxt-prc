<template>
  <NuxtLayout name="category">
    <template #hello>
      <div>this route path is: {{ params.id }}</div>
      <div v-for="item of someArr" :key="item">
        <span>{{ item }}</span>
      </div>
    </template>
    <template #content>
      <div>HelloWorld!</div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { params } = useRoute()

useHead({
  title: `${params.id} Page`,
  meta: [
    { name: 'description', content: 'Category Page' },
    { name: 'og:title', content: `${params.id} Page` },
    { name: 'og:description', content: `Welcome to ${params.id} Page` }
  ]
})

// useSeoMeta({
//   title: `${params.id} Page`,
//   description: 'Category Page'
// })

const someArr = reactive([1, 2, 3])
</script>
