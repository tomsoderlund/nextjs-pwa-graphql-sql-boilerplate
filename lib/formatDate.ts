export default (dateObj: Date) => `${dateObj.getFullYear()}-${('0' + (dateObj.getMonth() + 1)).slice(-2)}-${('0' + dateObj.getDate()).slice(-2)}`

export const dateAsISO = (date: Date | string): string | undefined => (date !== null && date !== undefined) ? (new Date(date)).toISOString() : undefined
