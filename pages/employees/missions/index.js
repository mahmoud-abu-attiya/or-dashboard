import Layout from "../../../layouts/Layout";
import AddNewD from "../../../components/dashboard/AddNewD";
import Client from "../../../components/Client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Clients = () => {
  const [services, setServices] = useState();
  let token = Cookies.get("token");
  useEffect(() => {
    axios
      .get("https://stormy-chamber-88256.herokuapp.com/api/employee-services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setServices(res.data.employee_services);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  return (
    <Layout>
      <h2>Clients</h2>
      <div className="row g-4 row-cols-1">
        {services ? (
          services.map((client) => {
            return (
              <div key={client.service_id} className="col">
                <Client
                  id={client.service_id}
                  name={client.client_name}
                  phone={client.phone}
                  email={client.email}
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
    </Layout>
  );
};
export default Clients;
