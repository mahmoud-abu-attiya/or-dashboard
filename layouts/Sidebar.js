import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import userPlaceholder from "../public/images/user-placeholder.png"

const Sidebar = () => {
  return (
    <aside className="round car" id="sidebar">
      <div className="aside_logo">
        <Image src={logo} alt="logo" />
      </div>
      <hr className="css-n4yg98"></hr>
      <Link href="profile">
      <a>
      <div className="user">
        <div className="user_img">
          <Image src={userPlaceholder} alt="user name" />
        </div>
        <h5>user name</h5>
      </div>
      </a>
      </Link>
      <div className="aside_links">
        <ul>
          <Link href="/dashboard">
            <a>
              <li><i className="fas fa-tachometer-alt"></i> Dashboard</li>
            </a>
          </Link>
          <Link href="/clients">
            <a>
              <li><i className="fas fa-users"></i> Clients</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li><i className="fas fa-briefcase"></i> Projects</li>
            </a>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
