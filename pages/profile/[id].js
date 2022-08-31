import React from "react";
import Sidebar from "../../layouts/Sidebar";
import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/avatar5.png";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function EmployeeProfile() {
  const [user, setuser] = useState({});
  useEffect(() => {
    const id = window.location.pathname.slice(9);
    axios.get(
      "https://stormy-chamber-88256.herokuapp.com/api/get/employee?id=" + id,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    ).then((res) => {
      setuser(res.data)
    }).catch((err) =>{
      console.log(err);
    })
  }, []);
  return (
    <Layout>
      <div className="profile Eprofile">
        <div className="user car">
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="head bord shadow-sm h-100">
                <div className="img-container">
                  <Image src={a2} alt="user name" priority />
                </div>
                <div>
                  <h1>{user.name}</h1>
                  <i className="fas fa-user-astronaut"></i>Employeee
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="user_info shadow-sm bord h-100">
                <h3>Info</h3>
                <a href={"tel:" + user.phone}>
                  <i className="fa fa-phone info"></i>
                  {user.phone}
                </a>
                <a href={"mailto:" + user.email}>
                  <i className="fas fa-at info"></i>
                  {user.email}
                </a>
                <div className="age">
                  <strong>Age:</strong> {user.age}
                </div>
                <div className="country">
                  <strong>From</strong> {user.country}
                </div>
                <div className="start-date">
                  <strong>Start date:</strong> {user.start_date.slice(0,10)}
                </div>
                <hr />
                <h3>permissions</h3>
                <div className="permissions">
                  <i className="fa fa-globe info"></i> {user.category}
                </div>
                  <button className="bt" disabled title="It will able soon.">
                    <i className="fas fa-edit"></i> Edit permissions
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
