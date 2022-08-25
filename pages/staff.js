import Sidebar from "../layouts/Sidebar";
import Layout from "../layouts/Layout";
import Empoloy from "../components/Empoloy";
import Image from "next/image";
import avatar from "../public/images/avatar2.png";
import { useEffect, useState } from "react";
import axios from "axios";
// import ImagePrev from "../components/ImagePrev";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { staff: data },
  };
};
export default function Staff({ staff }) {
  const [query, setQuery] = useState("");

  return (
    <div className="our-staff">
      <Layout>
        <header className="staff">
          <h2>Our Staff</h2>
          <form>
            <input
              type="search"
              id="staff_search"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="bord-2">
              <i className="fas fa-search" />
            </button>
          </form>
        </header>
        <div className="row g-3">
          {staff
            .filter((item) =>
              item.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((per) => {
              return (
                <div className="col-md-4" key={per.id}>
                  <Empoloy
                    url={per.id}
                    name={per.name}
                    photo={avatar}
                    position="web dev"
                    linkedin="link.com"
                    facebook="face.com"
                    twitter="twitter.com"
                    instagram="insta.com"
                  />
                </div>
              );
            })}
        </div>
      </Layout>
    </div>
  );
}
