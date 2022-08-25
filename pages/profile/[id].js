import React from "react";
import Sidebar from "../../layouts/Sidebar";
import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/avatar2.png";

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
  return (
    <Layout>
      <div className="profile row g-3">
        <div className="col-sm-6">
          <div className="user car">
            <div className="user_image shadow-sm">
              <Image src={a2} alt="user name" layout="fill" priority />
            </div>
            <div>
              <i className="fa fa-star" aria-hidden="true"></i> Super User
            </div>
            <div className="user_info">
              <h4>{user.name}</h4>
              <p>user position</p>
              <a href={"tel:" + user.phone}>
                <i className="fa fa-phone info"></i>
                {user.phone}
              </a>
              <a href={"mailto:" + user.email}>
                <i className="fas fa-at info"></i>
                {user.email}
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="car">
            {/* <ImagePrev /> */}
            hi
          </div>
        </div>
      </div>
    </Layout>
  );
}
