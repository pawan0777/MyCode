import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>MyCode</title>
        <meta name="viweport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" className="rounded" />
        <meta
          name="description"
          content="Web application that contains leetcode problems and video solutions"
        />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
