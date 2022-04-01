import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>IN hanD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Author: C.H. Naveen Kumar,My portfolio"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className="text-white bg-gradient-to-r from-zinc-900 to-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
