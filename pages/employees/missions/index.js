import Layout from "../../../layouts/Layout";
import AddNewD from "../../../components/dashboard/AddNewD";
import Client from "../../../components/Client";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
// import Cookies from "js-cookie";

const Clients = () => {
  // const [users, setusers] = useState([]);
  const [services, setServices] = useState();
  let token = Cookies.get("token");
  useEffect(() => {
    //   const parse = jwtDecode(Cookies.get("token"))
    //   const data = parse.user;
    //   console.log(data.services);
    //   setusers(data.services)
    axios
      .get("https://stormy-chamber-88256.herokuapp.com/api/employee-services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.employee_services);
        setServices(res.data.employee_services);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className="row row-cols-1 g-3">
        <div className="col">
          <AddNewD title="Add New Client" url="/add-new-client" />
        </div>
        <div className="col">
          <h2>Clients</h2>
          <div className="row g-4 row-cols-1">
            {services ? (
              services.map((client) => {
                return (
                  <div key={client.service_id} className="col">
                    <Client
                      id={client.service_id}
                      name={client.client_name}
                      url={"/employees/missions/" + client.service_id}
                      // services={client}
                    />
                  </div>
                );
              })
            ) : (
              <div className="col-12">
                <div className="car text-center">There is no missions yet.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Clients;
