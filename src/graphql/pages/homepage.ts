import { Homepage } from '@/interfaces/pages/homepage'
import { gql } from 'graphql-request'
import fetchData from '@/graphql'
import { getPageProps } from '@/graphql/pages/index'
import { getImageProps } from '@/graphql/image'

export async function getHomepage(): Promise<Homepage> {
   const query = gql`
        {
          pageBy(uri: "/") {
             id
             content
             uri
             slug
             title
             featuredImage {
               node {
                 sourceUrl
                 altText
                 title
                 mediaDetails {
                   height
                   width
                 }
               }
             }
             home {
               hero {
                 text
                 photo {
                   sourceUrl
                   altText
                   title
                   mediaDetails {
                     height
                     width
                   }
                 }
                 attributes {
                   icon {
                     sourceUrl
                     altText
                     title
                     mediaDetails {
                       height
                       width
                     }
                   }
                   label
                 }
               }
             }
           }
        }
    `

   const response = await fetchData(query)
   const heroSection = response.pageBy.home.hero
   return {
      ...getPageProps(response.pageBy),
      hero: {
         attributes: heroSection?.attributes?.map(({ icon, label }) => ({
            icon: getImageProps(icon),
            label
         })),
         photo: getImageProps(heroSection.photo),
         contentHTML: heroSection.text
      }
   }
}
