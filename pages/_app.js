import "../styles/globals.css";
import LayoutComponent from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}

export default MyApp;
