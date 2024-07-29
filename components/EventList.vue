<template>
  <h1 class="page-title">EventList</h1>

  <div class="button-wrapper">
    <button class="prev-btn" type="button" @click="prev">이전 데이터</button>
    <button class="next-btn" type="button" @click="next">다음 데이터</button>
  </div>

  <div v-if="status === 'pending'">Loading...</div>

  <div v-else-if="status === 'error' && error">
    <div>Error: {{ error.message }}</div>
  </div>

  <div v-else class="event-list-wrapper">
    <div v-for="(event, index) of eventData" :key="index" class="event-list-item">
      <NuxtLink :to="`/event/${event.eventId}`">
        <div>eventId is: {{ event.eventId }}</div>
        <div>eventName is: {{ event.eventName }}</div>
        <NuxtImg :src="event.mainImg" :alt="event.eventName" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AsyncDataRequestStatus } from 'nuxt/app'
import type { Event } from '~/api/types/event'

const limit = ref(10)
const page = ref(1)
const eventData = ref<Event[] | null>(null)
// NOTE: useState를 활용하는 방법도 있음
// const eventData = useState<Event[]>('eventData', () => [])

const status = ref<AsyncDataRequestStatus>('idle')
const error = ref<Error | null>(null)

const { $eventClientApi } = useNuxtApp()

async function fetchEventList() {
  status.value = 'pending'
  try {
    const response = await $eventClientApi.getEventList({
      limit: limit.value,
      page: page.value
    })

    status.value = 'success'
    return response
  } catch (err: unknown) {
    status.value = 'error'
    throw new Error(err as string)
  } finally {
    status.value = 'idle'
  }
}

const data = await fetchEventList()
eventData.value = data

async function prev() {
  if (page.value > 1) {
    page.value--
    const data = await fetchEventList()
    eventData.value = data
  }
}

async function next() {
  page.value++
  const data = await fetchEventList()
  eventData.value = data
}
</script>

<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  .prev-btn,
  .next-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin: 0.5rem;
    border: 1px solid #333;
    border-radius: 0.25rem;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    &:hover {
      background-color: #333;
      color: #fff;
      transition:
        background-color 0.3s ease-in-out,
        color 0.2s ease-in-out;
    }
  }
}
.event-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .event-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #333;
    border-radius: 0.25rem;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
