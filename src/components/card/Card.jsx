import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>Culture</span>
            </div>
            <h1>{item.title}</h1>
            <p className={styles.desc}>
            Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr 
            Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr 
            Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr Lurumr 
            </p>
            <Link href="/" className={styles.link}> Read More</Link>
        </div>
    </div>
  )
}

export default Card