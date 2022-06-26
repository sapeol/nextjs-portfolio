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

      <section>
        <h2 className={"title " + styles.work_type}>Work Projects</h2>
        <div className={styles.porfolio_items}>
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
                slack, it was quite fun to to work with two french founders and
                in the end it was one of my most memorable experience.{" "}
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
              <p>
                Thoughts | Role : Possibly the longest and my most involved
                project which is still in continous development and functional
                feature iterations. I was its lead developer who worked
                alongside with couple designers and project manager.
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
              <p>
                Thoughts | Role : It was quite short but a fun project. Julia
                sent us a pretty neat design file and she was very adamant about
                its implmentation being so perfect that we had to spend the
                entire day on figuring out the bug that was making the
                font-weight just a little thinner, haha.
              </p>
            </div>
          </div>

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
                and final iteration of its frontend website. The development
                process was quite fun, the bug fixing at times was getting
                satisfying and annoying at the same time. The client was quite
                understanding to work with despite it being completed couple
                days later than originally planned.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <h2 className={"title " + styles.work_type}>Personal Projects</h2>
        <div className={styles.porfolio_items}>
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
                slack, it was quite fun to to work with two french founders and
                in the end it was one of my most memorable experience.{" "}
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default work;
