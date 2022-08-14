import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Sidebar = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  let token = Cookies.get("token");
  const logout = () => {
    axios
      .post("https://blooming-caverns-98396.herokuapp.com/api/logout", token, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        router.push("/");
        Cookies.remove("token", "username");
      });
  };
  useEffect(() => {
    axios
      .get("https://blooming-caverns-98396.herokuapp.com/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  return (
    <aside className="round car" id="sidebar">
      <div className="aside_logo">
        <Image src={logo} alt="logo" />
      </div>
      <hr className="css-n4yg98"></hr>
      <Link href="/profile">
        <a className="text-center">
          <p className="mb-3">
            <i className="fa fa-user" aria-hidden="true"></i>
            {" " + user.name}
          </p>
        </a>
      </Link>
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
          <Link href="/projects">
            <a>
              <li
                className={
                  router.pathname == "/projects" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-briefcase"></i> Projects
              </li>
            </a>
          </Link>
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
        </ul>
      </div>
      <button className="shadow-sm bord-2" onClick={() => logout()}>
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
