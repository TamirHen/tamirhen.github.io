import styles from './page.module.scss'
import { getHomepage } from '@/graphql/pages/homepage'

async function getData() {
   return await getHomepage()
}

export default async function Home() {
   const data = await getData()

   return (
      <main className={styles.main}>
         <div className={styles.line} />
         <div className={styles.hero}>
            div
         </div>
      </main>
   )
}
