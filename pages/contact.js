import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Page | Sudeep Kuchara </title>
        <meta name="description" content="Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="title">Ways you can reach me </h1>
        <br />
        <br />
        <p className="title">
          You can reach through{" "}
          <a className="link" href="https://twitter.com/sudeepkuchara_">
            Twitter
          </a>
          ,{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/sudeep-kuchara-a52501190/"
          >
            Linkedin
          </a>
          ,{" "}
          <a className="link" href="">
            behance
          </a>{" "}
          and{" "}
          <a className="link" href="https://dribbble.com/monslisasdaddy">
            dribble
          </a>
          .
        </p>
      </section>
    </>
  );
}

export default contact;
