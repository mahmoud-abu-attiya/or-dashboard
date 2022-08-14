import Sidebar from "../layouts/Sidebar";
import Layout from "../layouts/Layout";
import { useEffect } from "react";
import axios from "axios"
import Cookies from "js-cookie";

export default function About() {
  useEffect(() => {
    let inpName = document.getElementById("clientName");
    let inpEmail = document.getElementById("floatingInput");
    let inpPhone = document.getElementById("clientPhone");
    let inpPass = document.getElementById("pass");
    let clientForm = document.getElementById("clientForm")
    let CLIENT_STATE = {
      name: inpName.value,
      phone: inpPhone.value,
      email: inpEmail.value,
      password: inpPass.value,
    }
    const addClient = () => {
      axios.post("https://blooming-caverns-98396.herokuapp.com/api/register", CLIENT_STATE, {
        headers:{
          Authorization: `Bearer ${Cookies.get("token")}`,
        }
      } )
      .then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }
    clientForm.onsubmit = (e) => {
      e.preventDefault();
      addClient();
    }
  }, []);
  return (
    <>
      <div className="container-xxl">
        <Sidebar />
        <div className="content dashboard">
          <Layout>
            <div className="car anc">
              <h3>Add New Client</h3>
              <input
                type="hidden"
                name="account_type"
                id="account_type"
                value="client"
              />
              <form id="clientForm">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="clientName"
                    placeholder="name"
                  />
                  <label htmlFor="clientName">Client Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="clientPhone"
                    placeholder="phone"
                  />
                  <label htmlFor="clientPhone">Client Phone Number</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Client Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="pass"
                    placeholder="password"
                  />
                  <label htmlFor="pass">Password</label>
                </div>
                {/* <div className="form-floating">
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label htmlFor="floatingSelect">Works with selects</label>
            </div> */}
                <input type="submit" value="+ Add Client" />
              </form>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
}
