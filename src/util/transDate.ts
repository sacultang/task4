export const toLocaleDateFunc = (date: string) => {
  const createdAt = new Date(date)
  return createdAt.toLocaleString()
}
