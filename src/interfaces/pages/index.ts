import Image from '../image'

export default interface Page {
   contentHTML?: string
   uri: string
   slug: string
   title: string
   image: Image | null
}
