import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          voluptas repellendus quidem quisquam ad aspernatur ea, tenetur
          suscipit illo distinctio eveniet optio non iste quasi voluptatem?
          Deserunt velit explicabo similique.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          voluptas repellendus quidem quisquam ad aspernatur ea, tenetur
          suscipit illo distinctio eveniet optio non iste quasi voluptatem?
          Deserunt velit explicabo similique.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
