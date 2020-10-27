import * as contentful from 'contentful'

export default contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})
