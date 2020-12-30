import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import SpaceBackground from "../components/SpaceBackground";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nicholas Peretti</title>
        <meta name="description" content="Nicholas Peretti's personal website" />
      </Head>
      <SpaceBackground /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
