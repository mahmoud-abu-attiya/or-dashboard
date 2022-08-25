import Sidebar from "../../layouts/Sidebar";
import Layout from "../../layouts/Layout";
import { useEffect, useState } from "react";
import AddServiceForm from "../../components/AddServiceForm";

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

const Details = ({ user }) => {
  const [addServices, setAddServices] = useState(false);
  useEffect(() => {
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
          <h4>client services</h4>
          <a href="/service">
            <div className="service car">
              <div className="service_name">socail media markting</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Example with label"
                  style={{ width: "55%" }}
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  55%
                </div>
              </div>
            </div>
          </a>
          <a href="/service">
            <div className="service car">
              <div className="service_name">web development</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Example with label"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>
            </div>
          </a>
          <a href="/service">
            <div className="service car service-done">
              <div className="service_name">web development</div>
              <div className="done">
                Done
                <i className="fa fa-check-circle" aria-hidden="true"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
