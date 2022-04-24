import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";

import Head from "next/head";

export default function LayoutComponent({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NavbarComponent />
      <main className="main-container">{children}</main>
      <FooterComponent />
    </>
  );
}
