"use client"
import React from 'react'
import styles from './authlink.module.css'
import Link from 'next/link'
import  { useState } from 'react';

const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  const status = "notauthentification"

  return (
    <>
      {status==="notauthentification" ? (
        <Link href="/login" className={styles.link}>Login</Link>) : 
        (
          <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link}>Logout</span>
          </>        
        )}
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link href="/">Homepage</Link>
            <Link href="/">Homepage</Link>
            <Link href="/">Homepage</Link>
            {status==="notauthentification" ? (
              <Link href="/login">Login</Link>) : 
        (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
          </>        
        )}
          </div>
        )}
    </>
  )
}

export default AuthLinks