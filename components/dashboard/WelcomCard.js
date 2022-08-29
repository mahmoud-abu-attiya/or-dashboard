import Image from "next/image";
import userPlaceholder from "../../public/images/user-placeholder.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"

const WelcomCard = () => {
  const [user, setUser] = useState("");

  // function parseJwt(token) {
  //   if (!token) { return; }
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace('-', '+').replace('_', '/');
  //   return JSON.parse(window.atob(base64));
  // }

  useEffect(() => {
    const parseToken = jwt_decode(Cookies.get("token"))
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
