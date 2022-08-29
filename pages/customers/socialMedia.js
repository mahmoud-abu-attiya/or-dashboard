import Layout from "../../layouts/Layout";
import Image from "next/image";
import a2 from "../../public/images/user-placeholder.png";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import Post from "../../components/customer/Post";

export default function Profile() {
  return (
    <Layout>
      <div className="row social">
        <div className="col-12"><Post /></div>
      </div>
    </Layout>
  );
}
