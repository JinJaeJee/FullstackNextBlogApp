import React from 'react'
import styles from './authlink.module.css'
import Link from 'next/link'

const AuthLinks = () => {

  ///temporaly used
  const status = "notauthentification"

  return (
    <>
      {status==="notauthentification" ? (
        <Link href="/login">Login</Link>) : 
        (
          <>
            <Link href="/write">Write</Link>
            <span>Logout</span>
          </>        
        )
      }
    </>
  )
}

export default AuthLinks