import Layout from "../../layouts/Layout";
import AddNewD from "../../components/dashboard/AddNewD";
import Client from "../../components/Client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return {
//     props: { clients: data },
//   };
// };

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://stormy-chamber-88256.herokuapp.com/api/get/all-clients", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setClients(res.data);
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
            {clients.length !== 0  ? (
              clients.map((client) => {
                return (
                  <div key={client.id} className="col" loading="lazy">
                    <Client
                      id={client.id}
                      email={client.email}
                      phone={client.phone}
                      name={client.name}
                      url={"/clients/" + client.id}
                      services={client.services}
                    />
                  </div>
                );
              })
            ) : (
              <div className="col-12">
                <div className="car text-center">There is no clients yet.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Clients;
