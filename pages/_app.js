import "../styles/globals.css";
import Header from "../components/Header/Header.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
