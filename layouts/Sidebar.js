import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Sidebar = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    Cookies.set("log", "false");
    router.push("/");
  };
  return (
    <aside className="round car col-lg-2" id="sidebar">
      <div className="aside_logo">
        <Image src={logo} alt="logo" />
      </div>
      <hr className="css-n4yg98"></hr>
      <div className="aside_links">
        <ul>
          <Link href="/dashboard">
            <a>
              <li
                className={
                  router.pathname == "/dashboard" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </li>
            </a>
          </Link>
          <Link href="/profile">
            <a>
              <li
                className={
                  router.pathname == "/profile" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-user"></i> Profile
              </li>
            </a>
          </Link>
          <Link href="/clients">
            <a>
              <li
                className={
                  router.pathname == "/clients" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-users"></i> Clients
              </li>
            </a>
          </Link>
          {/* <Link href="/projects">
            <a>
              <li
                className={
                  router.pathname == "/projects" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-briefcase"></i> Projects
              </li>
            </a>
          </Link> */}
          <Link href="/staff">
            <a>
              <li
                className={
                  router.pathname == "/staff" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-users-class"></i> Staff
              </li>
            </a>
          </Link>
          {/* <Link href="/socail-media">
            <a>
              <li
                className={
                  router.pathname == "/socail-media" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-globe"></i> Social Media
              </li>
            </a>
          </Link> */}
        </ul>
      </div>
      <button className="shadow-sm bord-2" onClick={() => logout()}>
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
