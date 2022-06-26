import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";

function blogs({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blogs | Sudeep Kuchara </title>
        <meta name="description" content="Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="title">Blogs</h1>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </section>
    </>
  );
}

export default blogs;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
