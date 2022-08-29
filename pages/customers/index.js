import Layout from "../../layouts/Layout";
import Cookies from "js-cookie";
import WelcomeCard from "../../components/dashboard/WelcomCard"
import Chart from "../../components/dashboard/Chat"
import ClientsNots from "../../components/dashboard/ChatPercent"
import MissionCard from "../../components/employee/MissionCard";
import CChart from "../../components/customer/CChart"
import NewPosts from "../../components/customer/NewPosts"

export default function EDashboard() {
  return (
    <Layout>
      <div className="row g-3 dashboard">
        <div className="col-sm-6">
          <WelcomeCard />
        </div>
        <div className="col-sm-6">
          <NewPosts />
        </div>
        <div className="col-12">
          <CChart />
        </div>
        {/* <div className="col-sm-4">
          <ClientsNots />
        </div> */}
        {/* <div className="col-12">
          <Projects />
        </div> */}
      </div>
    </Layout>
  );
}