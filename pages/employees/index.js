import Layout from "../../layouts/Layout";
import Cookies from "js-cookie";
import EWelcomeCard from "../../components/employee/EWelcomCard"
import Chart from "../../components/dashboard/Chat"
import ClientsNots from "../../components/dashboard/ChatPercent"
import MissionCard from "../../components/employee/MissionCard";

export default function EDashboard() {
  return (
    <Layout>
      <div className="row g-3 dashboard">
        <div className="col-sm-6">
          <EWelcomeCard />
        </div>
        <div className="col-sm-6">
          <MissionCard />
        </div>
        <div className="col-sm-8">
          <Chart />
        </div>
        <div className="col-sm-4">
          <ClientsNots />
        </div>
        {/* <div className="col-12">
          <Projects />
        </div> */}
      </div>
    </Layout>
  );
}