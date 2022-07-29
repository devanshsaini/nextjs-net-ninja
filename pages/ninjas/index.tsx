import React from "react";
import Head from "next/head";
import { NinjaProps } from "../../types/types/ninjas.type";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();

  return {
    props: {
      ninjas,
    },
  };
}

const Ninjas: React.FC<NinjaProps> = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
