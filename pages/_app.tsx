import "../styles/globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { AppProps } from "next/app";
// import Layout from "../components/layouts/layout";
import { Provider } from "react-redux";
import store from "../redux/store";

const Layout = dynamic(() => import("../components/layouts/layout"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Players List</title>
          <meta name="description" content="Developed by Nike" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
