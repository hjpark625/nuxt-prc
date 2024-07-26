<template>
  <section class="event-detail-wrapper">
    <div v-if="status === 'pending'">...loading</div>
    <div v-else-if="status === 'error'">
      <p>Error: {{ error }}</p>
    </div>
    <template v-if="eventDetail">
      <h1 class="event-name">이벤트 명: {{ eventDetail.eventName }}</h1>
      <p class="event-desc">이벤트 설명: {{ eventDetail.describe || '-' }}</p>
      <p class="event-period">이벤트 기간: {{ eventDetail.period }}</p>
      <p class="event-location">위치: {{ eventDetail.place }}</p>
      <p class="event-price">가격: {{ eventDetail.ticketPrice || '-' }}</p>
      <p class="event-category">분류: {{ eventDetail.categorySeq }}</p>
      <p class="event-img">
        <NuxtImg :src="eventDetail.mainImg" :alt="eventDetail.eventName" />
      </p>
    </template>
  </section>
</template>

<script lang="ts" setup>
interface EventDetail {
  eventId: number
  categorySeq: number
  guSeq: number | null
  eventName: string
  period: string
  place: string
  orgName: string
  useTarget: string
  ticketPrice: string | null
  player: string | null
  describe: string | null
  etcDesc: string | null
  homepageLink: string
  mainImg: string
  regDate: Date
  isPublic: boolean
  startDate: Date
  endDate: Date
  theme: string | null
  latitude: number
  longitude: number
  isFree: boolean
  detailUrl: string
}
interface EventDetailResponse<T> {
  data: T
}

const props = defineProps<{ eventId: string | string[] }>()

const eventDetail = useState<EventDetail | null>('eventDetail', () => null)

const {
  data: response,
  error,
  status
} = await useFetch<EventDetailResponse<EventDetail>>(`http://43.203.65.70/event/detail/${props.eventId}`, {
  method: 'GET'
})

if (status.value === 'success' && response.value) {
  eventDetail.value = response.value.data
  useHead({
    title: `${response.value.data.eventName}`,
    htmlAttrs: {
      lang: 'ko'
    },
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
  })
  useSeoMeta({
    description: response.value.data.describe || '-',
    ogTitle: `${response.value.data.eventName}`,
    ogDescription: response.value.data.describe || '-',
    ogImage: response.value.data.mainImg,
    ogUrl: response.value.data.detailUrl,
    ogType: 'website',
    twitterTitle: `${response.value.data.eventName}`,
    twitterDescription: response.value.data.describe || '-',
    twitterImage: response.value.data.mainImg,
    twitterCard: 'summary_large_image'
  })
}
</script>

<style lang="scss" scoped>
.event-detail-wrapper {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  .event-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .event-desc {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .event-period {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .event-location {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .event-price {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .event-category {
    font-size: 1rem;
    margin-bottom: 10px;
  }
}
</style>
