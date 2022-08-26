import Layout from "../layouts/Layout";
import { useEffect } from "react";
import Image from "next/image";
import img from "../public/images/avatar4.png";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";

export default function About() {
  useEffect(() => {
    /* for style */
    let search_input = document.getElementById("search_employee")
    let employees = document.getElementById("employees")
    search_input.onfocus = ()=>{
      employees.classList.add("open-employees")
    }
    // search_input.onblur = (e) =>{
    //   if (e.target != employees) {
    //     employees.classList.remove("open-employees")
    //   }
    // }
    /* for style */
    let inpEmail = document.getElementById("floatingInput");
    let inpPass = document.getElementById("pass");
    let inpName = document.getElementById("clientName");
    let inpPhone = document.getElementById("clientPhone");
    let inpCountry = document.getElementById("clientCountry");
    let inpGender = document.querySelector(".gender input:checked").id;
    let inpService = document.getElementById("floatingSelect").options;
    let inpEmployees = document.querySelectorAll(".employees .employee input:checked");
    let clientForm = document.getElementById("clientForm");
    let CLIENT_STATE = {
      name: inpName.value,
      phone: inpPhone.value,
      email: inpEmail.value,
      password: inpPass.value,
      country: inpCountry.value,
      sex: inpGender,
      category_id: inpService.selectedIndex,
      employee_id: inpEmployees.id,
    };

    const addClient = () => {
      axios
        .post(
          "https://stormy-chamber-88256.herokuapp.com/api/create-client",
          CLIENT_STATE,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          if (res.status == 401) {
            console.log(res.data);
            console.log("refrehs");
          }
        })
    };
    clientForm.onsubmit = (e) => {
      e.preventDefault();
      addClient();
    };
    axios.get("https://stormy-chamber-88256.herokuapp.com/api/categories" ,{
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: {
        filter : 1,
      }
    }).then(res => {
      console.log(res.data);
    })
  }, []);
  return (
    <Layout>
      <div className="car anc">
        <h3>Add New Client</h3>
        {/* <input
          type="hidden"
          name="account_type"
          id="account_type"
          value="client"
        /> */}
        <form id="clientForm">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">
              Client Email address{" "}
              <small className="text-secondary">(Required to login)</small>
            </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="password"
              required
            />
            <label htmlFor="pass">
              Password{" "}
              <small className="text-secondary">(Required to login)</small>
            </label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="clientName"
              placeholder="name"
              required
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
              type="text"
              className="form-control"
              id="clientCountry"
              placeholder="name"
            />
            <label htmlFor="clientCountry">Country</label>
          </div>
          <div className="form-floating gender_container bord shadow-sm">
            <h4>Gender</h4>
            <div className="gender">
              <div>
                <input type="radio" name="gender" id="1" defaultChecked/>
                <label htmlFor="1">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" id="0" />
                <label htmlFor="0">Female</label>
              </div>
            </div>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option defaultValue>Choose service for client</option>
              <option value={1}>Socail media markting</option>
            </select>
            <label htmlFor="floatingSelect">Services</label>
          </div>
          <div className="s-e">
            <h4>Select employee</h4>
            <div className="search-and-drop">
              <div className="search-input">
                <input
                  type="search"
                  id="search_employee"
                  placeholder="Search for employee..."
                />
                <button className="bt" type="button">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <div className="employees shadow bord" id="employees">
                <div className="employee shadow-sm bord">
                  <label htmlFor="30">
                    <div className="img-container">
                      <Image src={img} alt="employee name" />
                    </div>
                    <div className="employee-name">employee name</div>
                  </label>
                  <input
                    type="checkbox"
                    name="select_employee"
                    id="30"
                  />
                </div>
                <div className="employee shadow-sm bord">
                  <label htmlFor="20">
                    <div className="img-container">
                      <Image src={img} alt="employee name" />
                    </div>
                    <div className="employee-name">employee name</div>
                  </label>
                  <input
                    type="checkbox"
                    name="select_employee"
                    id="20"
                  />
                </div>
                <div className="employee shadow-sm bord">
                  <label htmlFor="10">
                    <div className="img-container">
                      <Image src={img} alt="employee name" />
                    </div>
                    <div className="employee-name">employee name</div>
                  </label>
                  <input
                    type="checkbox"
                    name="select_employee"
                    id="10"
                  />
                </div>
              </div>
            </div>
            {/* <button className="down bord-2 shadow-sm">
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </button>
            <div className="employees bord shadow">
              <div className="employee shadow-sm bord">
                <label htmlFor="select_employee">
                  <div className="img-container">
                    <Image src={img} alt="employee name" />
                  </div>
                  <div className="employee-name">employee name</div>
                </label>
                <input
                  type="checkbox"
                  name="select_employee"
                  id="select_employee"
                />
              </div>
              <div className="employee shadow-sm bord">
                <label htmlFor="select_employeetwo">
                  <div className="img-container">
                    <Image src={img} alt="employee name" />
                  </div>
                  <div className="employee-name">employee name</div>
                </label>
                <input
                  type="checkbox"
                  name="select_employee"
                  id="select_employeetwo"
                />
              </div>
              <div className="employee shadow-sm bord">
                <label htmlFor="select_employeetwo">
                  <div className="img-container">
                    <Image src={img} alt="employee name" />
                  </div>
                  <div className="employee-name">employee name</div>
                </label>
                <input
                  type="checkbox"
                  name="select_employee"
                  id="select_employeetwo"
                />
              </div>
            </div> */}
          </div>
          <input type="submit" value="+ Add Client" className="shadow-sm bord-2" />
        </form>
      </div>
    </Layout>
  );
}
