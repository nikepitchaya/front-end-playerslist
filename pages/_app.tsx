import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Players List</title>
        <meta name="description" content="Developed by Nike" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
