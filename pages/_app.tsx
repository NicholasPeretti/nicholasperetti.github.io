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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#003447"/>
        <meta name="theme-color" content="#ffffff" />
        <meta name="image" property="og:image" content="/profile-1.jpg" />
        <meta property="og:type" content="Profile" />
      </Head>
      <SpaceBackground /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
