import React from 'react'
import styles from './header.module.scss'

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.logoWrapper}>
            Tamir Hen
         </div>
      </header>
   )
}

export default Header
