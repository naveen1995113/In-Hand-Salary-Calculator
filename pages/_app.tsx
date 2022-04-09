import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import TnC from "../components/TnC";
export const stateContext = React.createContext("");
function MyApp({ Component, pageProps }: AppProps) {
  const [location, setLoction] = React.useState("");
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Author: C.H. Naveen Kumar,My portfolio"
        />
        <title>IN hanD</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <stateContext.Provider value={location}>
        <Navbar setState={(selectState) => setLoction(selectState)} />
        <TnC />
        <Component {...pageProps} />
      </stateContext.Provider>
    </>
  );
}

export default MyApp;
