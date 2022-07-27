import Sidebar from "../layouts/Sidebar";
import Layout from "../layouts/Layout";
import WelcomCard from "../components/dashboard/WelcomCard";
import AddNewD from "../components/dashboard/AddNewD";
import Chat from "../components/dashboard/Chat";
import ChatPercent from "../components/dashboard/ChatPercent";
import Projects from "../components/dashboard/Projects";

export default function Dashboard() {
  return (
    <>
      <div className="container-xxl">
        <Sidebar />
        <div className="content dashboard">
          <Layout>
            <div className="row g-3">
              <div className="col-sm-6">
                <WelcomCard />
              </div>
              <div className="col-sm-6">
                <AddNewD />
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
        </div>
      </div>
    </>
  );
}
