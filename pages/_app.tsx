import Layout from "@/components/layout/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <title> باغ زیتون - فروشگاه آنلاین زیتون و روغن زیتون </title>
        <meta name="description" content="فروشگاه آنلاین زیتون و روغن زیتون" />
        <meta name="keywords" content="فروش زیتون، زیتون کنسروی، زیتون شکسته، روغن زیتون بکر، روغن زیتون محلی بودار، روغن زیتون تصفیه شده، روغن زیتون بدون بو" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
