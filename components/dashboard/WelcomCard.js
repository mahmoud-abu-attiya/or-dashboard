import Image from "next/image"
import userPlaceholder from "../../public/images/user-placeholder.png"
import Link from "next/link"

const WelcomCard = () => {
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
          <h2>User Name</h2>
          <small>super user</small>
        </div>
      </div>
      </a>
      </Link>
    </div>
  )
}

export default WelcomCard