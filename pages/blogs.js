import React from "react";
import Head from "next/head";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

function blogs({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blogs | Sudeep Kuchara </title>
        <meta name="description" content="Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="blogs-archive">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`blogs/${id}`}>{title}</Link>
            {/* <Link href={id}>{title}</Link> */}
            <Date dateString={date} />
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
