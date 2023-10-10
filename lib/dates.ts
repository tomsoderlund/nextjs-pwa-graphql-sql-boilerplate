// import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'
// dayjs.extend(relativeTime)

export const dateAsISO = (date: Date | string): string | undefined => (date !== null && date !== undefined) ? (new Date(date)).toISOString() : undefined
