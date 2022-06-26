import Head from "next/head";
import React from "react";
import Image from "next/image";

function work() {
  return (
    <>
      <Head>
        <title>Work | Sudeep Kuchara </title>
        <meta name="description" content="Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="porfolio-item-1">
        <div className="portfolio-image"></div>
        <div className="porfolio-item-content">
          <p>SmokeTip </p>
          <span>
            Electronic Cigarettes | E-Liquids | Vaporizers | Clearomizers
          </span>
        </div>
      </section>
    </>
  );
}

export default work;
