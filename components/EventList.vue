<template>
  <ClientOnly>
    <h1>EventList</h1>

    <div v-if="status === 'pending'">Loading...</div>

    <div v-else-if="status === 'error' && error">
      <div>Error: {{ error.message }}</div>
      <!-- <button @click="() => refresh()">Retry</button> -->
    </div>

    <template v-else>
      <div v-for="(event, index) of eventData" :key="index">
        <div>eventId is: {{ event.eventId }}</div>
        <div>eventName is: {{ event.eventName }}</div>
        <NuxtImg :src="event.mainImg" :alt="event.eventName" />
      </div>
    </template>

    <!-- <div>
      <button type="button" @click="prev">이전 데이터</button>
      <button type="button" @click="next">다음 데이터</button>
    </div> -->
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { AsyncDataRequestStatus } from 'nuxt/app'

const limit = ref(10)
const page = ref(1)
const eventData = ref<Event[] | null>(null)

const status = ref<AsyncDataRequestStatus>('pending')
const error = ref<Error | null>(null)

async function getEventList(params: { limit: globalThis.Ref<number>; page: globalThis.Ref<number> }) {
  const {
    data,
    status: serverStatus,
    error: serverError,
    refresh
  } = await useAsyncData<Response<Event>>(
    'eventListData',
    () =>
      $fetch('http://43.203.65.70/event/list', {
        method: 'GET',
        params: {
          limit: params.limit.value,
          offset: (params.page.value - 1) * params.limit.value
        }
      }),
    {
      watch: [params.page],
      server: false
    }
  )

  return {
    data,
    serverStatus,
    serverError,
    refresh
  }
}

// const {
//   data,
//   status: serverStatus,
//   error: serverError,
//   refresh
// } = await useAsyncData<Response<Event>>(
//   'eventListData',
//   () =>
//     $fetch('http://43.203.65.70/event/list', {
//       method: 'GET',
//       params: {
//         limit: limit.value,
//         offset: (page.value - 1) * limit.value
//       }
//     }),
//   {
//     watch: [page],
//     server: false
//   }
// )

onMounted(async () => {
  const { data, serverError, refresh, serverStatus } = await getEventList({ limit, page })
  eventData.value = data.value?.data as Event[]
  status.value = serverStatus.value
  error.value = serverError.value
})

// console.log(data.value?.data)

// watchEffect(() => {
//   eventData.value = data.value && data.value.data
//   status.value = serverStatus.value
//   error.value = serverError.value
// })

// status.value = serverStatus.value
// eventData.value = data.value && data.value.data

// async function prev() {
//   if (page.value > 1) {
//     page.value--
//     await refresh()
//     return
//   }
// }

// async function next() {
//   page.value++
//   await refresh()
//   return
// }

interface Event {
  categorySeq: number
  detailUrl: string
  endDate: string
  eventId: number
  eventName: string
  mainImg: string
  period: string
  startDate: string
}

interface Response<T> {
  data: T[]
  totalCount: number
}
</script>
