import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import SpaceBackground from "../components/SpaceBackground";
import config from "../config"
import Head from "next/head"

const { socialMeta } = config

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{socialMeta.title}</title>
        <meta name="description" content={socialMeta.description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#003447"/>
        <meta name="theme-color" content="#ffffff" />

        {["og", "twitter"].map(provider => (
          <>
          <meta name={`${provider}:image`} content="/social-cover.jpg" />
          <meta property={`${provider}:type`} content="Profile" />
          </>
        ))}
        
      </Head>
      <SpaceBackground /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
