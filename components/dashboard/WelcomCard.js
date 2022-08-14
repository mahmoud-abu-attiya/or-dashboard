import Image from "next/image"
import userPlaceholder from "../../public/images/user-placeholder.png"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import Cookies from "js-cookie"

const WelcomCard = () => {
  const [user, setUser] = useState("")
  useEffect(() => {
    axios.get("https://blooming-caverns-98396.herokuapp.com/api/user",{
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    } ).then(res => {
      console.log(res.data);
      setUser(res.data);
    })
  }, []);
  return (
    <div className='car w-card'>
      <h3>Welcome Back,</h3>
      <Link href="/profile">
      <a>
      <div className="user shadow-sm bord-2">
        <div className="user_image">
          <Image src={userPlaceholder} alt="user name"  />
        </div>
        <div>
          <h2>{user.name}</h2>
          <small>super user</small>
        </div>
      </div>
      </a>
      </Link>
    </div>
  )
}

export default WelcomCard