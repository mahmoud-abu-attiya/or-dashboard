import Layout from "../../layouts/Layout";
import Cookies from "js-cookie";

export default function EDashboard() {
  console.log(Cookies.get("log"));
  return (
    <Layout>
      <div className="car">customer</div>
    </Layout>
  );
}