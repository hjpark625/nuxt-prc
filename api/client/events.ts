export async function getEventList(params: { limit: number; page: number }) {
  const { limit, page } = params
  try {
    const response = await $fetch<Response<Event>>('http://43.203.65.70/event/list', {
      method: 'GET',
      params: {
        limit,
        offset: (page - 1) * limit
      }
    })
    return response.data
  } catch (err: unknown) {
    throw new Error(err as string)
  }
}

export interface Event {
  categorySeq: number
  detailUrl: string
  endDate: string
  eventId: number
  eventName: string
  mainImg: string
  period: string
  startDate: string
}

export interface Response<T> {
  data: T[]
  totalCount: number
}
