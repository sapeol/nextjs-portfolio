import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function blogs() {
  return (
    <>
      <Head>
        <title>Blogs | Sudeep Kuchara </title>
        <meta name="description" content="Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h3 className={styles.center}>Blogs</h3>
      </section>
    </>
  );
}

export default blogs;
