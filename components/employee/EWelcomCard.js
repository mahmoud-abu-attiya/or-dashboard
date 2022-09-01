import Image from "next/image";
import userPlaceholder from "../../public/images/user-placeholder.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"

const WelcomCard = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const parseToken = jwt_decode(Cookies.get("token"))
    setUser(parseToken.user);
    console.log(parseToken.user);
  }, []);
  return (
    <div className="car w-card">
      <h3>Welcome Back,</h3>
      <Link href="/profile">
        <a>
          <div className="user shadow bord-2">
            <div className="user_image">
              {user && (
                <Image src={userPlaceholder} alt="user name" layout='fill' />
              )}
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
