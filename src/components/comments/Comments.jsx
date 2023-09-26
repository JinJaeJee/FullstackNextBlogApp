import Image from "next/image"
import styles from "./comments.module.css"
import Link from "next/link"

const Comments = () => {
    const status = "authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="write a comment" className={styles.input}/>
                <button className={styles.button}>Send</button>

            </div>
        ) : (
            <Link href="/login"> login to write a comment </Link>
            )}
            <div className={styles.comments}>
              <div className={styles.comment}>
                <div className={styles.user}>
                  <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.img}/>
                  <div className={styles.userInfo}>
                    <span className={styles.username}> John Dodo </span>
                    <span className={styles.date}> 01.01.2023 </span>
                  </div>
                </div>
                <p className={styles.decs}>
                  It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The point of
                  using Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using Content here, content here making it.
                </p>
              </div>
            </div>
    </div>
  )
}

export default Comments