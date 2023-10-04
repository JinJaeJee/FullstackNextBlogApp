"use client"
import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/navigation'

const Pagination = ({page, hasPrevItem, hasNextItem }) => {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <button 
        className={styles.button}
        disabled={!hasPrevItem}
        onClick={()=>router.push(`?page=${page - 1}`)}
      >
        Previos
      </button>
      <button 
        className={styles.button}
        disabled={!hasNextItem} 
        onClick={()=>router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination