import React from 'react'
import styles from "./index.module.scss"
import { Helmet } from 'react-helmet-async'
const NotFound = () => {
  return (
    <>
    <section className={styles["found"]}>
        <div className={styles["box"]}>
            <h1>404 NOT FOUND</h1>
        </div>
    </section>
    </>
  )
}

export default NotFound
