import Sidebar from "../layouts/Sidebar";
import Layout from "../layouts/Layout";
import Image from "next/image";
import a2 from "../public/images/avatar2.png";
// import { useEffect } from "react";

export default function Profile() {
  // useEffect(() => {
  //   let uploadImage = document.getElementById("uploadImage")
  //   let editBtn = document.querySelector(".profile .user_image i");

      
  //   editBtn.addEventListener("click", ()=>{
  //     uploadImage.click()
  //   });
  //   return () => {
  //     editBtn.removeEventListener("click", ()=>{
  //       uploadImage.click()
  //     });
  //   };
  // }, []);
  return (
    <>
      <div className="container-xxl">
        <Sidebar />
        <div className="content dashboard">
          <Layout>
            <div className="car profile">
              <div className="user">
                <div className="user_image">
                  <Image src={a2} alt="user name" />
                  <label htmlFor="uploadImage">
                    <i className="fas fa-edit bord-2"></i>
                  </label>
                  <input type="file" name="" id="uploadImage" />
                </div>
                <div className="user_info">
                  <input type="text" name="" defaultValue="Mahmoud Abu-Attiya" id="" className="bord-2" placeholder="Name" />
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i> Super User
                  </div>
                </div>
              </div>
                <div className="user_info_another">
                  <label htmlFor="profileEmail">Email Address</label>
                  <input type="text" name="" id="profileEmail" />
                  <label htmlFor="profilePhone">Phone Number</label>
                  <input type="text" name="" id="profilePhone" />
                </div>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
}
