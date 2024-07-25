<template>
  <div class="counter-wrapper">
    <h1 class="title">count is: {{ count }}</h1>
    <h1 class="title">test is: {{ test }}</h1>
    <ClientOnly>
      <Teleport to="#modal">
        <MainModal :is-open="isOpen" @close-modal="modalHandler" />
      </Teleport>
    </ClientOnly>
    <ClientOnly fallback-tag="div" fallback="Button Loading...">
      <button class="decrement-btn" type="button" @click="decrement">감소</button>
      <button class="increment-btn" type="button" @click="increment">증가</button>
    </ClientOnly>
    <button type="button" class="modal-btn" @click="openModal">open Modal</button>
  </div>
</template>

<script lang="ts" setup>
import MainModal from '~/components/MainModal.vue'

const count = ref(0)
const isOpen = ref(false)
const test = useState('count', () => 0)

function openModal(e: Event) {
  e.stopPropagation()
  isOpen.value = true
}
function modalHandler(emitVal: boolean) {
  console.log(emitVal)

  isOpen.value = emitVal
}

function increment() {
  count.value += 1
  test.value += 1
}

function decrement() {
  count.value -= 1
  test.value -= 1
}

onUpdated(() => {
  console.log(count.value)
})
</script>

<style lang="scss" scoped>
.counter-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .decrement-btn,
  .increment-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin: 0.5rem;
    border: 1px solid #333;
    border-radius: 0.25rem;
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
}

.modal-btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 0.5rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
}
</style>
