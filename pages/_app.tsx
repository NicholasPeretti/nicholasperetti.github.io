import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import SpaceBackground from "../components/SpaceBackground";
import config from "../config";
import Head from "next/head";

const { socialMeta } = config;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{socialMeta.title}</title>
        <meta name="description" content={socialMeta.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#003447" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open graph meta */}
        <meta
          name="image"
          property="og:image"
          content={socialMeta.coverImage}
        />
        <meta property="og:type" content="Profile" />

        {/* Twitter card meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@NicholasPeretti" />
        <meta name="twitter:title" content={socialMeta.title} />
        <meta name="twitter:description" content={socialMeta.description} />
        <meta name="twitter:image" content="/profile-1.jpg" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HWSJGBFBCP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HWSJGBFBCP');`,
          }}
        />
      </Head>
      <SpaceBackground />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
