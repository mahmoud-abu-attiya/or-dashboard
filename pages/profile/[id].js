import React from "react";
import Sidebar from "../../layouts/Sidebar";
import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/avatar5.png";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

export default function Dashboard({ user }) {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (Cookies.get("state") == "super_admin") {
      setAdmin(true)
    }
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
                  <i className="fa fa-star" aria-hidden="true"></i> Super User
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
                  <strong>Age:</strong> 20 Y
                </div>
                <div className="country">
                  <strong>From</strong> Egypt
                </div>
                <div className="start-date">
                  <strong>Start date:</strong> 20/5/2022
                </div>
                <hr />
                <h3>permissions</h3>
                <div className="permissions">
                  <i className="fa fa-globe info"></i> Social Media
                </div>
                {admin && (
                  <button className="bt">
                    <i className="fas fa-edit"></i>{" "}
                    Edit permissions
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
