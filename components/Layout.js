// File: components/Layout.js
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "Next.js Static Blog" }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content="A static blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
}
