import Head from "next/head";
import React from "react";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title} </title>
        <meta name="description" content={props.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </>
  );
}

export default Layout;
