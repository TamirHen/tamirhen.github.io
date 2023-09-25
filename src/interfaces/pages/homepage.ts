import Page from './index'
import Image from '@/interfaces/image'

export interface Homepage extends Page {
   hero: {
      contentHTML: string
      photo: Image
      attributes: [{
         icon: Image
         label: string
      }]
   }
}
