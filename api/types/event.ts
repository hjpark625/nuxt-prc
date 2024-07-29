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

export interface EventDetail {
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
export interface EventDetailResponse<T> {
  data: T
}
