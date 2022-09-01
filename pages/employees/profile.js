import Sidebar from "../../layouts/Sidebar";
import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/user-placeholder.png";
import { useEffect, useState } from "react";
import ImagePrev from "../../components/ImagePrev";
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
        <div className="user car row g-3">
          <div className="col-sm-3">
            <div className="user_image shadow-sm">
              {/* {createObjectURL ? <img src={createObjectURL} alt="" /> : <Image src={a2} alt="user name" />}
              <label htmlFor="uploadImage">
                <i className="fas fa-edit bord-2"></i>
              </label>
              <input
                type="file"
                accept="image/*"
                name=""
                onChange={uploadToClient}
                id="uploadImage"
              /> */}
              <input
                type="file"
                name="myImage"
                id="myImage"
                accept="image/*"
                onChange={uploadToClient}
              />
              <label htmlFor="myImage" className="bord shadow-sm">
                <i className="fas fa-plus"></i>
              </label>
              {createObjectURL ? <img src={createObjectURL} alt="something" /> : <Image src={a2} alt="hi" />}
            </div>
            <div>
              <i className="fa fa-star" aria-hidden="true"></i> Super User
            </div>
            <div></div>
          </div>
          <div className="col-sm-9">
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
                />
              </div>
            </div>
            <div className="user_btns">
              <button disabled={change ? null : 'disabled' } className="bt bt-c">
                cansel
              </button>
              <button disabled={change ? null :'disabled' } className="bt">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
