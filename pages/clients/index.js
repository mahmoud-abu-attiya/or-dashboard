import Sidebar from "../../layouts/Sidebar";
import Layout from "../../layouts/Layout";
import AddNewD from "../../components/dashboard/AddNewD";
import Client from "../../components/Client";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { clients: data },
  };
};

const clients = ({ clients }) => {
  return (
    <Layout>
      <div className="row row-cols-1 g-3">
        <div className="col">
          <AddNewD />
        </div>
        <div className="col">
          <h2>Clients</h2>
          <div className="row g-4 row-cols-1">
            {clients.map((client) => {
              return (
                <div key={client.id} className="col" loading="lazy">
                  <Client id={client.id} name={client.name} />
                  {/* <Link href={"/clients/" + client.id}>
                          <h3>{client.name}</h3>
                        </Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default clients;
