import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
