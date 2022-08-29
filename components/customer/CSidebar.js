import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const ESidebar = () => {
  const router = useRouter();
  const logout = () => {
    Cookies.remove("token");
    Cookies.set("log", "false")
    router.push("/");
  };
  return (
    <aside className="round car col-lg-2" id="sidebar">
      <div className="aside_logo">
        <Image src={logo} alt="logo" priority/>
      </div>
      <hr className="css-n4yg98"></hr>
      <div className="aside_links">
        <ul>
          <Link href="/customers">
            <a>
              <li
                className={
                  router.pathname == "/customers" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </li>
            </a>
          </Link>
          <Link href="/customers/profile">
            <a>
              <li
                className={
                  router.pathname == "/customers/profile" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-user"></i> Profile
              </li>
            </a>
          </Link>
          <Link href="/customers/socialMedia">
            <a>
              <li
                className={
                  router.pathname == "/customers/socialMedia" ? "active shadow-sm" : ""
                }
              >
                <i className="fas fa-globe"></i> Social
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

export default ESidebar;
