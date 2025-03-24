import "@/styles/globals.css";
import "@/styles/slick-theme.css";
import "@/styles/slick.css";
import Layout from "@/Components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
