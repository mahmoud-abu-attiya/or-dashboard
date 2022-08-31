import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/user-placeholder.png";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

export default function Profile() {
  const [change, setchange] = useState(false);
  const [country, setcountry] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [name, setname] = useState();
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setchange(true);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  useEffect(() => {
    const user = jwtDecode(Cookies.get("token")).user;
    setname(user.name);
    setphone(user.phone);
    setcountry(user.country);
    setemail(user.email);
  }, []);
  return (
    <Layout>
      <div className="profile">
        <div className="user car">
          <div className="user_info row g-3">
            <div className="col-md-6">
              <label htmlFor="profileName">Your Name</label>
              <input
                type="text"
                name=""
                defaultValue={name}
                id="profileName"
                className="bord-2"
                placeholder="Name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="profileEmail">Email Address</label>
              <input
                type="text"
                defaultValue={email}
                placeholder="example@email.com"
                className="bord-2"
                name=""
                id="profileEmail"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="profilePhone">Phone Number</label>
              <input
                type="text"
                defaultValue={phone}
                placeholder="+1234567890"
                className="bord-2"
                name=""
                id="profilePhone"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="profilePhone">Country</label>
              <input
                type="text"
                defaultValue={country}
                placeholder="Country"
                className="bord-2"
                name=""
                id="profileCountry"
              />
            </div>
          </div>
          <div className="user_btns">
            <button disabled={change ? null : "disabled"} className="bt bt-c">
              cansel
            </button>
            <button disabled={change ? null : "disabled"} className="bt">
              Save
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
