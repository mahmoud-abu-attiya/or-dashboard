import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png"
import { useEffect } from "react";

const Navbar = () => {
  useEffect(()=>{
    show_sidebar.onclick = ()=>{
      sidebar.classList.add("show-sidebar")
      overlay.style.display = "block"
    }
  },[])
  return (
    <nav className="navbar car">
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <button id="show_sidebar">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
    </nav>
  );
};

export default Navbar;
