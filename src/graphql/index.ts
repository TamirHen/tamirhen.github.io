import { request } from 'graphql-request'

export default async function fetchData(query: string) {
   return await request(
      process.env.WP_GRAPHQL_URI ||
      'https://portfolio.webbrew.co.uk/index.php?graphql',
      query
   )
}
