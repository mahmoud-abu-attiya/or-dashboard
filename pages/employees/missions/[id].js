import Layout from "../../../layouts/Layout";
import { useEffect, useState } from "react";
import AddServiceForm from "../../../components/AddServiceForm";
import Calender from "../../../components/dashboard/Calender";
import axios from 'axios'
import Cookies from "js-cookie";
import Page from "../../../components/employee/Page";

const Details = () => {
  const [addServices, setAddServices] = useState(false);
  const [user, setuser] = useState({});
  const [services, setServices] = useState()
  useEffect(() => {
    const id = window.location.pathname.slice(20);
    axios.get(
      "https://stormy-chamber-88256.herokuapp.com/api/get/client?id=" + id,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    ).then((res) => {
      setuser(res.data)
      setServices(res.data.services)
      console.log(res.data.services)
    }).catch((err) =>{
      console.log(err);
    })
    let overlay = document.getElementById("overlay");
    let addServiceBtn = document.querySelector(".add-service");
    addServiceBtn.onclick = () => {
      overlay.style.display = "block";
      setAddServices(true);
    };
    overlay.onclick = () => {
      setAddServices(false);
    };
  }, []);
  return (
    <Layout>
      <div className="car client_page">
        {addServices && <AddServiceForm client={user.name} />}
        <div className="client">
          <div className="client_info">
            <h2>{user.name}</h2>
            <div className="mb-2">
              <a href={"tel:" + user.phone}>
                <i className="fa fa-phone info" aria-hidden="true"></i>{" "}
                {user.phone}
              </a>
            </div>
            <div className="">
              <a href={"mailto:" + user.email}>
                <i className="fas fa-at info"></i> {user.email}
              </a>
            </div>
          </div>
          <button className="add-service shadow-sm bord-2">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Add Service
          </button>
        </div>
        <hr />
        <div className="client_services">
            {services ? 
            services.map((service) => {
              return(
                // <Calender key={service.service_id}/>
                <Page key={service.service_id} />
              )
            }) : (
              <div className="car">There is no services.</div>
            )
            }
        </div>
      </div>
    </Layout>
  );
};

export default Details;
