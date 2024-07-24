<template>
  <div class="counter-wrapper">
    <h1 class="title">count is: {{ count }}</h1>
    <ClientOnly fallback-tag="div" fallback="Button Loading...">
      <button class="decrement-btn" type="button" @click="decrement">감소</button>
      <button class="increment-btn" type="button" @click="increment">증가</button>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value += 1
}

function decrement() {
  count.value -= 1
}
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
</style>
