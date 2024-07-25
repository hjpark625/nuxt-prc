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
      <button type="button" @click="toggleModal">open Modal</button>
    </template>

    <Teleport to="body">
      <div v-if="isOpen">
        <div>Teleport to #teleports</div>
      </div>
    </Teleport>
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

// const isOpen = ref(false)
const isOpen = useState(() => false)

function toggleModal(e: Event) {
  //   e.stopPropagation()
  e.preventDefault()
  isOpen.value = !isOpen.value
}

// useSeoMeta({
//   title: `${params.id} Page`,
//   description: 'Category Page'
// })

const someArr = reactive([1, 2, 3])
</script>
