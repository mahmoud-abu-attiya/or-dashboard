import Layout from "../layouts/Layout";
import { useEffect } from "react";
import Image from "next/image";
import img from "../public/images/avatar4.png";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";
import { useState } from "react";

export default function About() {
  const [employeescat, setEmployeescat] = useState();
  const [subemited, setSubemited] = useState(false);
  const [added, setAdded] = useState(false);
  const [client, setClient] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  useEffect(() => {
    /* for style */
    let search_input = document.getElementById("search_employee");
    let employees = document.getElementById("employees");
    if (employeescat) {
      search_input.onfocus = () => {
        employees.classList.add("open-employees");
      };
    }
    /* for style */
    let inpEmail = document.getElementById("floatingInput");
    let inpPass = document.getElementById("pass");
    let inpName = document.getElementById("clientName");
    let inpPhone = document.getElementById("clientPhone");
    let inpCountry = document.getElementById("clientCountry");
    let inpGender = document.querySelector(".gender input:checked").id;
    let inpService = document.getElementById("floatingSelect").options;
    let clientForm = document.getElementById("clientForm");
    const genderid = () => {
      if (inpGender == "one") {
        return 1;
      } else {
        return 0;
      }
    };
    let employeesArray = [];
    document.querySelectorAll(".employee input").forEach((inp) => {
      inp.onchange = () => {
        if (inp.checked) {
          if (!employeesArray.includes(inp.id)) {
            employeesArray.push(inp.id);
          }
          console.log(employeesArray);
        }
      };
    });
    document.getElementById("floatingSelect").onchange = () => {
      console.log(inpService.selectedIndex);
      axios
        .get(
          `https://stormy-chamber-88256.herokuapp.com/api/categories?filter=${inpService.selectedIndex}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          setEmployeescat(res.data.employees);
          console.log(res.data.employees);
        })
        .catch((err) => {
          setSubemited(false);
          setEmployeescat(false);
          console.log(err);
          if (err.response.status == 401) {
            axios
              .post("https://stormy-chamber-88256.herokuapp.com/api/refresh", {
                headers: {
                  Authorization: `Bearer ${Cookies.get("token")}`,
                },
              })
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                setSubemited(false);
                if (err.response.status == 401) {
                  Cookies.remove("token");
                  Cookies.set("log", false);
                  location.reload();
                }
              });
          }
        });
    };
    const addClient = () => {
      let CLIENT_STATE = {
        name: inpName.value,
        phone: inpPhone.value,
        email: inpEmail.value,
        password: inpPass.value,
        country: inpCountry.value,
        sex: genderid(),
        category_id: inpService.selectedIndex,
        employee_id: JSON.stringify(employeesArray),
      };
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
          swal("Good job!", "You clicked the button!", "success");
          setSubemited(false);
          setEmailError(false);
          setClient(inpName.value);
          setAdded(true);
          inpName.value = "";
          inpPhone.value = "";
          inpEmail.value = "";
          inpPass.value = "";
          inpCountry.value = "";
          console.log(inpService[0]);
          inpService[0].selected = "selected";
          setEmployeescat(false);
        })

        .catch((err) => {
          setSubemited(false);
          console.log(err);
          if (err.response) {
            if (
              err.response.data.email == "The email has already been taken."
            ) {
              setEmailError(true);
            }
            if (
              err.response.data.password ==
              "The password must be at least 6 characters."
            ) {
              setPassError(true);
            }
            if (err.response.status == 401) {
              axios
                .post(
                  "https://stormy-chamber-88256.herokuapp.com/api/refresh",
                  {
                    headers: {
                      Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  setSubemited(false);
                  if (err.response.status == 401) {
                    Cookies.remove("token");
                    Cookies.set("log", false);
                    location.reload();
                  }
                });
            }
          }
          swal(
            "Error!",
            emailError
              ? "The email has already been taken."
              : passError
              ? "The password must be at least 6 characters."
              : "There is some thing wrong. please try again!",
            "error"
          );
          setSubemited(false);
        });
    };
    clientForm.onsubmit = (e) => {
      setSubemited(true);
      e.preventDefault();
      addClient();
    };
  }, [employeescat, emailError, passError]);
  return (
    <Layout>
      {added && (
        <div className="added car">
          <div>
            You just added <strong> {client}</strong>
          </div>
          <button onClick={() => setAdded(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
      <div className="car anc">
        <h3>Add New Client</h3>
        <form id="clientForm">
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="email"
                  className={
                    emailError ? "form-control is-invalid" : "form-control"
                  }
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">
                  Client Email address*{" "}
                  <small className="text-secondary">(Required to login)</small>
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="password"
                  className={
                    passError ? "form-control is-invalid" : "form-control"
                  }
                  id="pass"
                  placeholder="password"
                  required
                />
                <label htmlFor="pass">
                  Password*{" "}
                  <small className="text-secondary">(Required to login)</small>
                </label>
              </div>
            </div>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="clientName"
              placeholder="name"
              required
            />
            <label htmlFor="clientName">Client Name*</label>
          </div>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="clientPhone"
                  placeholder="phone"
                />
                <label htmlFor="clientPhone">Client Phone Number</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="clientCountry"
                  placeholder="name"
                />
                <label htmlFor="clientCountry">Country</label>
              </div>
            </div>
          </div>
          <div className="form-floating gender_container bord shadow-sm">
            <h4>Gender</h4>
            <div className="gender">
              <div>
                <input type="radio" name="gender" id="one" defaultChecked />
                <label htmlFor="1">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" id="two" />
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
              <option value={2}>Socail media markting</option>
            </select>
            <label htmlFor="floatingSelect">Services</label>
          </div>
          {employeescat && (
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
                  {employeescat &&
                    employeescat.map((employee) => {
                      return (
                        <div
                          className="employee shadow-sm bord"
                          key={employee.employee_id}
                        >
                          <label htmlFor={employee.employee_id}>
                            <div className="img-container">
                              <Image src={img} alt={employee.employee_name} />
                            </div>
                            <div className="employee-name">
                              {employee.employee_name}
                            </div>
                          </label>
                          <input
                            type="checkbox"
                            name="select_employee"
                            id={employee.employee_id}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
          <button type="submit">
            {subemited ? (
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "+ Add Client"
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
}
