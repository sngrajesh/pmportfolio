import Head from "next/head";
import Self from "../components/Self";
import About from "../components/About";
import styles from "../styles/Home.module.css";
import Others from "../components/Others";

export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Rajesh Singh</title>
        <meta
          name="description"
          content="Are you looking for a developer to upscale your business."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Self />
        <About />
        <Others />
      </main>
    </div>
  );
}
