import Sidebar from "../layouts/Sidebar";
import Layout from "../layouts/Layout";
import AddNewD from "../components/dashboard/AddNewD";
import Client from "../components/Client";

export default function Clients() {
  return (
    <>
      <div className="container-xxl">
        <Sidebar />
        <div className="content">
          <Layout>
            <div className="row row-cols-1 g-3">
              <div className="col">
                <AddNewD />
              </div>
              <div className="col">
                <h2>Clients</h2>
                <div className="row g-4 row-cols-1">
                  <div className="col">
                    <Client />
                  </div>
                  <div className="col">
                    <Client />
                  </div>
                  <div className="col">
                    <Client />
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
};
