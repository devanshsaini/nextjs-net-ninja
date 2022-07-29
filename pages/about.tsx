import React from "react";
import Head from "next/head";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>About</div>
    </>
  );
};

export default About;
