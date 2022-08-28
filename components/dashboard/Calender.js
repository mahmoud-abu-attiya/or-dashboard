import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../public/images/index-bg.jpg";

const Calender = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const hours = [
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
    "12 PM",
  ];
  useEffect(() => {
    let cels = document.querySelectorAll(".cel");
    // let closePopup = document.getElementById("closePopup");
    cels.forEach((cel) => {
      cel.addEventListener("click", (e) => {
        let celDetail = e.target.querySelector(".cel-detail");
        if (e.target == cel) {
          cels.forEach(
            (c) => (c.querySelector(".cel-detail").style.display = "none")
          );
          celDetail.style.display = "flex";
        }
      });
    });
    // const close = (e) => {
    //   console.log("clicked");
    //   e.target.parantElement.style.display = "none";
    // };
  }, []);
  return (
    <div className="calender-container bord shadow-sm">
      <div className="head">
        <button className="bord shadow-sm">
          <i className="fas fa-angle-left"></i> Prev
        </button>
        <button className="bord shadow-sm">
          Next <i className="fas fa-angle-right"></i>
        </button>
      </div>
      <div className="calender">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-11">
            <div className="days">
              <div className="day">
                <div className="day-name">SUN</div>
                <div className="day-date">28</div>
              </div>
              <div className="day">
                <div className="day-name">SUN</div>
                <div className="day-date">28</div>
              </div>
              <div className="day">
                <div className="day-name">SUN</div>
                <div className="day-date">28</div>
              </div>
              <div className="day">
                <div className="day-name">SUN</div>
                <div className="day-date">28</div>
              </div>
              <div className="day">
                <div className="day-name">SUN</div>
                <div className="day-date">28</div>
              </div>
              <div className="day">
                <div className="day-name">SUN</div>
                <div className="day-date">28</div>
              </div>
              <div className="day">
                <div className="day-name">SUN</div>
                <div className="day-date">28</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-1">
          <div className="col-1">
            <div className="hours">
              {hours.map((hour, index) => {
                return (
                  <div className="hour" key={index}>
                    {hour}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-11">
            <div className="table">
              {Array(168)
                .fill(" ")
                .map((cel, index) => {
                  return (
                    <div key={index} className="cel">
                      <div className="cel-detail shadow-lg bord">
                        <button
                          id="closePopup"
                          onClick={(e) => e.target.parentElement.style.display = "none"}
                        >
                          x
                        </button>
                        <div className="head">
                          <div className="date">SUN 28Aug, 1 AM</div>
                        </div>
                        <textarea name="" id="" placeholder="Title"></textarea>
                        <input
                          type="file"
                          name="myImage"
                          id="myImage"
                          accept="image/*"
                          onChange={uploadToClient}
                        />
                        <label htmlFor="myImage" className="bord shadow-sm">
                          <i className="fas fa-plus"></i>
                          <div>{createObjectURL ? "Select another image" : "Add an image"}</div>
                          </label>
                        {createObjectURL && (
                          <img src={createObjectURL} alt="something" />
                        )}
                        <button id="done">
                          <i className="fas fa-check"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
