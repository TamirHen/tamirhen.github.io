import '../styles/globals.scss'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Header from '@/layout/header'
import styles from './layout.module.scss'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Tamir Hen',
   description: `Tamir Hen's portfolio`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
      <body className={inter.className}>
      <div className={styles.mainContainer}>
         <Header />
         {children}
      </div>
      </body>
      </html>
   )
}
