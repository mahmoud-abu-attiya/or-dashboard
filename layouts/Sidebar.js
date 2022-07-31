import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter()
  return (
    <aside className="round car" id="sidebar">
      <div className="aside_logo">
        <Image src={logo} alt="logo" />
      </div>
      <hr className="css-n4yg98"></hr>
      <Link href="/profile">
      <a className="text-center">
        <p className="mb-3"><i className="fa fa-user" aria-hidden="true"></i> user name</p>
      </a>
      </Link>
      <div className="aside_links">
        <ul>
          <Link href="/dashboard">
            <a>
              <li className={router.pathname == "/dashboard" ? "active shadow-sm" : ""}><i className="fas fa-tachometer-alt"></i> Dashboard</li>
            </a>
          </Link>
          <Link href="/clients">
            <a>
              <li className={router.pathname == "/clients" ? "active shadow-sm" : ""}><i className="fas fa-users"></i> Clients</li>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <li className={router.pathname == "/projects" ? "active shadow-sm" : ""}><i className="fas fa-briefcase"></i> Projects</li>
            </a>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
