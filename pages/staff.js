import Layout from "../layouts/Layout";
import Empoloy from "../components/Empoloy";
import avatar from "../public/images/avatar2.png";
import { useEffect, useState } from "react";
import axios from "axios";
import AddNewD from "../components/dashboard/AddNewD";
import Cookies from "js-cookie";

// export const getStaticProps = async () => {
//   const res = await fetch("https://stormy-chamber-88256.herokuapp.com/api/get/all-employees");
//   const data = await res.json();
//   return {
//     props: { staff: data },
//   };
// };
export default function Staff() {
  const [query, setQuery] = useState("");
  const [staff, setStaff] = useState([]);

  let token = Cookies.get("token")

  useEffect(() => {
    axios
      .get("https://stormy-chamber-88256.herokuapp.com/api/get/all-employees", {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((res) => {
        console.log(res.data);
        setStaff(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          axios
            .post("https://stormy-chamber-88256.herokuapp.com/api/refresh", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              setSubemited(false);
              if (err.response.status == 401) {
                Cookies.remove("token");
                Cookies.set("log", false);
                location.reload();
              }
            });
        }
      });
  }, [token]);

  return (
    <div className="our-staff">
      <Layout>
        <AddNewD title="Add New Employee" url="/add-new-employee" />
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
          {staff.length !== 0 ? staff
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
                    position={per.category}
                    linkedin="link.com"
                    facebook="face.com"
                    twitter="twitter.com"
                    instagram="insta.com"
                  />
                </div>
              );
            }) : <div className="col-12"><div className="car text-center">There is no employees yet.</div></div> }
        </div>
      </Layout>
    </div>
  );
}
