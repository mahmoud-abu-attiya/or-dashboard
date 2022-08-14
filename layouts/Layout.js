import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
import Loading from "./Loading";

export default function Layout({ children }) {
  return (
    <>
      {/* <Loading /> */}
      <Navbar />
      <Overlay />
      <main>{children}</main>
      <Footer />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
