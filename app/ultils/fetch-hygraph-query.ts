export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json',
      Accept: 'aplication/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 60 * 60 * 24,
    },
  })

  const { data } = await response.json()
  return data
}
