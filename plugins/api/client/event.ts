import eventApi from '~/api/event'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      eventClientApi: eventApi.client
    }
  }
})
