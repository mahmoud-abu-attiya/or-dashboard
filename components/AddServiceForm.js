import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import img from "../public/images/avatar7.png"

const AddServiceForm = (props) => {
  const [mark, setMark] = useState(false);
  // const [web, setWeb] = useState(false);
  // const [app, setApp] = useState(false);
  const [employeescat, setEmployeescat] = useState();

  const [categories, setCategorise] = useState([]);
  useEffect(() => {
    axios
      .get("https://stormy-chamber-88256.herokuapp.com/api/categories", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCategorise(res.data);
      })
      .then((err) => {
        console.log(err);
      });
    let selectService = document.querySelector("select.shadow-sm");
    selectService.onchange = () => {
      if (selectService.value == 1) {
        axios
        .get(
          `https://stormy-chamber-88256.herokuapp.com/api/categories?filter=${selectService.options.selectedIndex}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          setEmployeescat(res.data.employees);
          console.log(res.data.employees);
          setMark(true)
        })
      } else (
        setMark(false)
      )
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
    const addService = ()=>{
      let id = window.location.pathname.slice(9)
      let categoryId = selectService.options.selectedIndex
      let SERVICE_DATA = {
        category_id: categoryId,
        client_id: id,
        employee_id: JSON.stringify(employeesArray),
      }
      axios.post("https://stormy-chamber-88256.herokuapp.com/api/create-service", SERVICE_DATA , {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }).then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
    let formAddService = document.getElementById("addService")
    formAddService.onsubmit = (e) => {
      e.preventDefault()
      addService()
    }
  }, []);
  return (
    <div className="add_service_model model">
      <form className="car" id="addService">
        <h5>add new service for {props.client}</h5>
        <hr />
        <div className="inputs">
          <select className="shadow-sm">
            <option value="0" defaultValue>
              Select Service
            </option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {mark && (
            <div className="employees shadow-sm bord" id="employees">
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
          )}
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;
