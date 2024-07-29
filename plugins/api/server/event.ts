import eventApi from '~/api/event'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      eventServerApi: eventApi.server
    }
  }
})
