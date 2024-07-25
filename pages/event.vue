<template>
  <div>Hello World!</div>
</template>

<script lang="ts" setup>
const { data, status, error } = await useFetch<Response<Event>>('http://43.203.65.70/event/list?limit=10&offset=0', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})

// if (status.value === 'success') {
//   eventList.push(data.value?.data)
// }

// const { data, status, error, refresh, clear } = await useAsyncData<Response<Event>>('eventData', () =>
//   $fetch('http://43.203.65.70/event/list?limit=10&offset=0')
// )

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
