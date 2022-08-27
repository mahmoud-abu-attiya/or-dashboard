import Image from "next/image";
import userPlaceholder from "../../public/images/user-placeholder.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import parseJwt from "../jwt";
import Cookies from "js-cookie";

const WelcomCard = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const parseToken = parseJwt(Cookies.get("token"))
    setUser(parseToken.user);
  }, []);
  return (
    <div className="car w-card">
      <h3>Welcome Back,</h3>
      <Link href="/profile">
        <a>
          <div className="user shadow bord-2">
            <div className="user_image">
              <Image src={userPlaceholder} alt="user name" />
            </div>
            <div>
              <h2>{user == "" ? "User Name" : user.name}</h2>
              <small>{user.role}</small>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default WelcomCard;
