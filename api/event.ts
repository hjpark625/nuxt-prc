import type { Event, Response, EventDetail, EventDetailResponse } from '~/api/types/event'

export default {
  client: {
    async getEventList(params: { limit: number; page: number }) {
      const config = useRuntimeConfig()
      const { limit, page } = params

      try {
        const response = await $fetch<Response<Event>>(`${config.public.apiBaseUri}/event/list`, {
          method: 'GET',
          params: {
            limit,
            offset: (page - 1) * limit
          }
        })

        return response.data
      } catch (err: unknown) {
        throw new Error((err as Error).message)
      }
    }
  },
  server: {
    async getEventDetail(eventId: number) {
      const config = useRuntimeConfig()

      try {
        const response = await useAsyncData<EventDetailResponse<EventDetail>>(
          'eventDetail',
          async () =>
            await $fetch(`${config.public.apiBaseUri}/event/detail/${eventId}`, {
              method: 'GET'
            })
        )

        return response
      } catch (err: unknown) {
        throw new Error((err as Error).message)
      }
    }
  }
}
