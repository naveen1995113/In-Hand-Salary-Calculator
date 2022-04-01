import React from 'react';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
export const stateContext =React.createContext('');
function MyApp({ Component, pageProps }: AppProps) {
  const [location,setLoction]=React.useState('');
  return (
      <stateContext.Provider value={location}>
      <Navbar setState={(selectState)=>setLoction(selectState)}/>
      <Component {...pageProps} />
      </stateContext.Provider>
  );
}

export default MyApp;
