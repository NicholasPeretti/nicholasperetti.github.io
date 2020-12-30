import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import SpaceBackground from "../components/SpaceBackground";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpaceBackground /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
