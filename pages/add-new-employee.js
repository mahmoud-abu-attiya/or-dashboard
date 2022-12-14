import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";

export default function About() {
  const [subemited, setSubemited] = useState(false);
  useEffect(() => {
    let inpEmail = document.getElementById("floatingInput");
    let inpPass = document.getElementById("pass");
    let inpName = document.getElementById("employeeName");
    let inpPhone = document.getElementById("employeePhone");
    let inpCountry = document.getElementById("employeeCountry");
    let inpGender = document.querySelector(".gender input:checked").id;
    let inpCategory = document.getElementById("floatingSelect").options;
    let inpAge = document.getElementById("age");
    let inpStartDate = document.getElementById("start_date");
    let employeeForm = document.getElementById("employeeForm");
    const resetData = () => {
      inpName.value = "";
      inpPhone.value = "";
      inpEmail.value = "";
      inpPass.value = "";
      inpAge.value = "";
      inpCountry = "";
      inpStartDate.value = "";
      inpCategory[0].selected = "selected";
    };

    const addEmployee = () => {
      let EMPLOYEE_STATE = {
        name: inpName.value,
        phone: inpPhone.value,
        email: inpEmail.value,
        password: inpPass.value,
        country: inpCountry.value,
        sex: inpGender,
        category_id: inpCategory.selectedIndex,
        age: inpAge.value,
        start_date: inpStartDate.value,
      };
      axios
        .post(
          "https://stormy-chamber-88256.herokuapp.com/api/create-employee",
          EMPLOYEE_STATE,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          setSubemited(false);
          console.log(res.data);
          swal({
            title: "Done!",
            text: "Done create Employee",
            icon: "success",
            button: "Okay!",
          });
          resetData();
        })
        .catch((err) => {
          setSubemited(false);
          console.log(err);
          swal({
            title: "error!",
            text: "there is something wrong!",
            icon: "error",
            button: "Okay!",
          });
        });
    };
    employeeForm.onsubmit = (e) => {
      setSubemited(true);
      e.preventDefault();
      addEmployee();
    };
  }, []);
  return (
    <Layout>
      <div className="car anc">
        <h3>Add New Employee</h3>
        <form id="employeeForm">
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">
                  Employee Email address{" "}
                  <small className="text-secondary">(Required to login)</small>
                </label>
              </div>
            </div>
            <div className="col-sm-6">
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
            </div>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="employeeName"
              placeholder="name"
              required
            />
            <label htmlFor="employeeName">Employee Name</label>
          </div>
          <div className="row g-3">
            <div className="col-sm-4">
              <div className="form-floating gender_container bord shadow-sm h-100">
                <h4>Gender</h4>
                <div className="gender">
                  <div>
                    <input type="radio" name="gender" id="1" defaultChecked />
                    <label htmlFor="1">Male</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" id="0" />
                    <label htmlFor="0">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8 row g-3 m-0">
              <div className="col-12 px-0">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="employeePhone"
                    placeholder="phone"
                  />
                  <label htmlFor="employeePhone">Employee Phone Number</label>
                </div>
              </div>
              <div className="col-12 px-0">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="employeeCountry"
                    placeholder="name"
                  />
                  <label htmlFor="employeeCountry">Country</label>
                </div>
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
          <div className="row g-3">
            <div className="col-sm-6">
            <div className="form-floating">
            <input type="date" className="form-control" id="start_date" />
            <label htmlFor="start_date">Start Date</label>
          </div>
            </div>
            <div className="col-sm-6">
            <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="18"
              min={15}
            />
            <label htmlFor="age">Age</label>
          </div>
            </div>
          </div>

          <button type="submit">
            {subemited ? (
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "+ Add Employee"
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
}
