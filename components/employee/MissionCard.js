import React from "react";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";

const MissionCard = () => {
  const [miss, setmiss] = useState([]);
  const [services, setServices] = useState();
  let token = Cookies.get("token");
  useEffect(() => {
    axios
      .get("https://stormy-chamber-88256.herokuapp.com/api/employee-services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setServices(res.data.employee_services.slice(0, 2));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  return (
    <div className="car">
      <h2>Missions</h2>
      <div className="row g-3">
        {services ? (
          services.map((service) => {
            return (
              <div className="col-md-6" key={service.service_id}>
                <Link href="employees/missions">
                  <a>
                    <div className="text-capitalize rounded-3 bg-white bord p-3 shadow-sm">
                      <h5>{service.client_name}</h5>
                      <div>
                        Date: <strong>{service.create_at.slice(0, 10)}</strong>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })
        ) : (
          <h3 className="text-secondary">There is no missions yet.</h3>
        )}
      </div>
    </div>
  );
};

export default MissionCard;
