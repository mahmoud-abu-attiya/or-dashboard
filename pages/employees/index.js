import Layout from "../../layouts/Layout";
import Cookies from "js-cookie";
import WelcomeCard from "../../components/dashboard/WelcomCard"

export default function EDashboard() {
  console.log(Cookies.get("log"));
  return (
    <Layout>
      <div className="row g-3 dashboard">
        <div className="col-sm-6">
          <WelcomeCard />
        </div>
        {/* <div className="col-sm-6">
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
        </div> */}
      </div>
    </Layout>
  );
}