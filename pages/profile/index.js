import Sidebar from "../../layouts/Sidebar";
import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/avatar2.png";
import { useEffect, useState } from "react";
import ImagePrev from "../../components/ImagePrev";

export default function Profile() {
  // const [selectedFile, setSelectedFile] = useState(a2)
  // const [preview, setPreview] = useState()

  // // create a preview as a side effect, whenever selected file is changed
  // useEffect(() => {
  //     if (!selectedFile) {
  //         setPreview(undefined)
  //         return
  //     }

  //     const objectUrl = URL.createObjectURL(selectedFile)
  //     setPreview(objectUrl)

  //     // free memory when ever this component is unmounted
  //     return () => URL.revokeObjectURL(objectUrl)
  // }, [selectedFile])

  // const onSelectFile = e => {
  //   console.log(preview);
  //     if (!e.target.files || e.target.files.length === 0) {
  //         setSelectedFile(undefined)
  //         return
  //     }

  //     // I've kept this example simple by using the first image instead of multiple
  //     setSelectedFile(e.target.files[0])
  // }
  return (
    <Layout>
      <div className="profile row g-3">
        <div className="col-sm-6">
          <div className="user car">
            <div className="user_image shadow-sm">
              <Image src={a2} alt="user name" layout="fill" priority />
              <label htmlFor="uploadImage">
                <i className="fas fa-edit bord-2"></i>
              </label>
              <input type="file" name="" id="uploadImage" />
            </div>
            <div>
              <i className="fa fa-star" aria-hidden="true"></i> Super User
            </div>
            <div className="user_info">
              <label htmlFor="profileName">Your Name</label>
              <input
                type="text"
                name=""
                defaultValue="Mahmoud Abu-Attiya"
                id="profileName"
                className="bord-2"
                placeholder="Name"
              />
              <label htmlFor="profileEmail">Email Address</label>
              <input
                type="text"
                defaultValue="mahmoud.abuattiya106@gmail.com"
                placeholder="example@email.com"
                className="bord-2"
                name=""
                id="profileEmail"
              />
              <label htmlFor="profilePhone">Phone Number</label>
              <input
                type="text"
                defaultValue="+201020384108"
                placeholder="+1234567890"
                className="bord-2"
                name=""
                id="profilePhone"
              />
            </div>
            <div className="user_btns">
              <button className="bt bt-c">cansel</button>
              <button disabled className="bt">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="car">
            <ImagePrev />
          </div>
        </div>
      </div>
    </Layout>
  );
}
