import Head from "next/head";
import React from "react";
import Image from "next/image";

import styles from "../styles/Work.module.css";

function work() {
  return (
    <>
      <Head>
        <title>Work | Sudeep Kuchara </title>
        <meta name="description" content="Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.porfolio_items}>
        <div className={styles.porfolio_item}>
          <div className={styles.porfolio_content}>
            <a
              target="_blank"
              rel="noreferrer"
              className="title link smoketip_accent"
              href="https://smoketip.com"
            >
              SmokeTip{" "}
            </a>
            <p className={styles.porfolio_content_span}>
              Electronic Cigarettes | E-Liquids | Vaporizers | Clearomizers
            </p>
            <p>
              {" "}
              Thoughts | Role : First ever project, I built the first, second
              and final iteration of its frontend
            </p>
          </div>
        </div>
        <div className={styles.porfolio_item}>
          <div className={styles.porfolio_content}>
            <a
              target="_blank"
              rel="noreferrer"
              className="ikks_accent title link"
              href="https://www.ikks.com/fr/collection-ikks-free-the-sea/collection/"
            >
              Ikks x mariniere{" "}
            </a>
            <p className={styles.porfolio_content_span}>
              French luxury clothing store
            </p>
            <p>
              Thoughts | Role : It was quite a big project, i was hired as a
              freelance contractor via codersh web services to built their
              mariniere colab collection page. All communication held through
              slack, it was quite fun to to work with two french founders and in
              the end it was one of my most memorable experience{" "}
            </p>
          </div>
        </div>
        <div className={styles.porfolio_item}>
          <div className={styles.porfolio_content}>
            <a
              target="_blank"
              rel="noreferrer"
              className="reinventu_accent title link"
              href="https://reinventu.com"
            >
              ReinventU{" "}
            </a>
            <p className={styles.porfolio_content_span}>
              Florida based fitness influencer supplements store
            </p>
          </div>
        </div>
        <div className={styles.porfolio_item}>
          <div className={styles.porfolio_content}>
            <a
              target="_blank"
              rel="noreferrer"
              className="bahiadays_accent title link "
              href="https://bahiadays.com"
            >
              BahiaDays{" "}
            </a>
            <p className={styles.porfolio_content_span}>
              Latina mom owned baby boy clothing store
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default work;
