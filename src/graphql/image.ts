import Image from '../interfaces/image'

export function getImageProps(image: any): Image {
   return {
      url: image.sourceUrl,
      altText: image.altText,
      title: (image.title) || null,
      height: image.mediaDetails.height,
      width: image.mediaDetails.width
   }
}
