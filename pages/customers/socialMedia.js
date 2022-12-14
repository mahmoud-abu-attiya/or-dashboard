import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/user-placeholder.png";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios"
import Post from "../../components/customer/Post";

export default function Profile() {
  const [services, setservices] = useState();
  let token = Cookies.get("token")
  useEffect(() => {
    axios.get("https://stormy-chamber-88256.herokuapp.com/api/client-services",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data.client_services);
      setservices(res.data.client_services)
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <Layout>
      <div className="row social g-3">
        {services ?  services.map((service) => {
          return(
            <div className="col-12" key={service.service_id}><Post /></div>
          )
        }) : (
          <div className="col-12">
            <div className="car">There is no services yet.</div>
          </div>
        )}
        {/* <div className="col-12"><Post /></div>
        <div className="col-12"><Post /></div>
        <div className="col-12"><Post /></div>
        <div className="col-12"><Post /></div> */}
      </div>
    </Layout>
  );
}
