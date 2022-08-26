import Sidebar from "../layouts/Sidebar";
import Layout from "../layouts/Layout";
import WelcomCard from "../components/dashboard/WelcomCard";
import AddNewD from "../components/dashboard/AddNewD";
import Chat from "../components/dashboard/Chat";
import ChatPercent from "../components/dashboard/ChatPercent";
import Projects from "../components/dashboard/Projects";
import Cookies from "js-cookie";

export default function Dashboard() {
  return (
    <Layout>
      <div className="row g-3 dashboard">
        <div className="col-sm-6">
          <WelcomCard />
        </div>
        <div className="col-sm-6">
          <AddNewD title="Add New Client" url="/add-new-client" />
        </div>
        <div className="col-sm-8">
          <Chat />
        </div>
        <div className="col-sm-4">
          <ChatPercent />
        </div>
        <div className="col-12">
          <Projects />
        </div>
      </div>
    </Layout>
  );
}
