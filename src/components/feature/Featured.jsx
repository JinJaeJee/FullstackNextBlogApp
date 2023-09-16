import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey Sup Man yo</b> How are you doing !!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lrem Lorem Lorem Lorem Lorem Lorem Lorem.</h1>
          <p className={styles.postDesc}>
          Lrem Lorem Lorem Lorem Lorem Lorem LoremLrem Lorem Lorem Lorem Lorem Lorem LoremLrem Lorem Lorem Lorem Lorem Lorem LoremLrem Lorem Lorem Lorem Lorem Lorem Lorem. 
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Featured;