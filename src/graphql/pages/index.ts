import Page from '@/interfaces/pages'
import { getImageProps } from '@/graphql/image'

export function getPageProps(page: any): Page {
   let image
   if (page.featuredImage) {
      image = getImageProps(page.featuredImage.node)
   }
   return {
      contentHTML: page.content,
      uri: page.uri,
      slug: page.slug,
      title: page.title,
      image: image || null
   }
}
