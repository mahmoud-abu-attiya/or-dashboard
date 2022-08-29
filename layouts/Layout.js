import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import Sidebar from "./Sidebar";
import ESidebar from "../components/employee/ESidebar";
import CSidebar from "../components/customer/CSidebar";
import Overlay from "./Overlay";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Layout({ children }) {
  const [admin, setAdmin] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [customer, setCustomer] = useState(false);
  useEffect(()=>{
    if (Cookies.get("state") == "super_admin") {
      setAdmin(true);
      setCustomer(false);
      setEmployee(false);
    }
    if (Cookies.get("state") == "employee") {
      setEmployee(true);
      setAdmin(false);
      setCustomer(false);
    }
    if (Cookies.get("state") == "client") {
      setCustomer(true);
      setAdmin(false);
      setEmployee(false);
    }
  },[])
  return (
    <>
      <Overlay />
      <Loading />
      <div className="container-xxl">
        <Navbar />
        <div className="content-container">
          {admin ? <Sidebar /> : <></>}
          {employee ? <ESidebar /> : <></>}
          {customer ? <CSidebar /> : <></>}
          <main>
            <div className="content">{children}</div>
            <Footer />
          </main>
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        ></Script>
      </div>
    </>
  );
}
