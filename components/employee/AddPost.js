import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cookies from "js-cookie";

const AddPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [add, setadd] = useState(false);
  const [post, setpost] = useState(true);
  const [story, setstory] = useState(false);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [services, setServices] = useState();
  let overlay = document.getElementById("overlay");
  const viewform = () => {
    overlay.style.display = "block";
    setadd(true);
    document.body.style.overflow = "hidden";
  };
  const closeForm = () => {
    document.body.style.overflow = "auto";
    overlay.style.display = "none";
    setadd(false);
  };
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  useEffect(() => {
    const id = window.location.pathname.slice(9);
    axios
      .get(
        "https://stormy-chamber-88256.herokuapp.com/api/get/client?id=" + id,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        setServices(res.data.services);
        console.log(res.data.services);
      })
      .catch((err) => {
        console.log(err);
      });
    const postPost = () => {
      let inpTextarea = document.getElementById("content");
      let DATA_CREATE_POST = {
        service_id: services,
        caption: "caption",
        content: inpTextarea.value,
        when_to_post: startDate,
        social_media_type: "facebook",
        images: [createObjectURL],
      };
      axios
        .post(
          "https://stormy-chamber-88256.herokuapp.com/api/creat-post",
          DATA_CREATE_POST,
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
          console.log(err);
        });
    };
    let formPost = document.getElementById("postPost");
    if (add) {
      formPost.onsubmit = (e) => {
      if (post) {
          e.preventDefault();
          postPost();
          console.log("hi");
        };
      }
      let postType = document.querySelectorAll("#postType input");
      postType.forEach((inp) => {
        inp.onchange = () => {
          if (inp.id == "post") {
            setpost(true);
            setstory(false);
          } else {
            setstory(true);
            setpost(false);
          }
        };
      });
    }
  }, []);
  return (
    <>
      <button className="bt w-100" onClick={() => viewform()}>
        Add
      </button>
      {add && (
        <form className="car" id="postPost">
          <button className="cansel" onClick={() => closeForm()}>
            <i className="fas fa-times"></i>
          </button>
          <div id="postType">
            <div>
              <input type="radio" name="gender" id="post" defaultChecked />
              <label htmlFor="post">Post</label>
            </div>
            <div>
              <input type="radio" name="gender" id="story" />
              <label htmlFor="story">Story</label>
            </div>
          </div>
          {post && (
            <div className="post-info">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                id="date"
              />
              <textarea name="" id="content" placeholder="Content"></textarea>
              <input
                type="file"
                name="myImage"
                id="myImage"
                accept="image/*"
                onChange={uploadToClient}
              />
              <label htmlFor="myImage" className="bord shadow-sm">
                <i className="fas fa-plus"></i>
                <div>
                  {createObjectURL ? "Select another image" : "Add an image"}
                </div>
              </label>
              {createObjectURL && <img src={createObjectURL} alt="something" />}
            </div>
          )}
          <button type="submit" className="bt w-100">
            Done
          </button>
        </form>
      )}
    </>
  );
};

export default AddPost;
