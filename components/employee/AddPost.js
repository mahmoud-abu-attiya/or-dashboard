import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cookies from "js-cookie";
import swal from "sweetalert";

const AddPost = (props) => {
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
  overlay.addEventListener("click", () => closeForm());

  const img = [];
  const uploadToClient = (event) => {
    img.push(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setCreateObjectURL(URL.createObjectURL(i));
    }
    // console.log(img);
  };
  useEffect(() => {
    // const id = window.location.pathname.slice(9);
    // axios
    //   .get(
    //     "https://stormy-chamber-88256.herokuapp.com/api/get/client?id=" + id,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${Cookies.get("token")}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     setServices(res.data.services);
    //     console.log(res.data.services);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // const postPost = () => {
    //   let inpTextarea = document.getElementById("content");
    //   let postdate = document.getElementById("date");
    //   console.log(postdate);
    //   // let DATA_CREATE_POST = {
    //   //   page_name: "page name",
    //   //   service_id: props.id,
    //   //   caption: "caption",
    //   //   content: inpTextarea.value,
    //   //   when_to_post: postdate.value,
    //   //   social_type: "facebook",
    //   //   images: img,
    //   // };
    //   let form = new FormData();
    //   form.append("service_id", props.id);
    //   form.append("caption", "test");
    //   form.append("page_name", "test");
    //   form.append("when_to_post", postdate.value);
    //   form.append("social_type", "facebook");
    //   form.append("content", inpTextarea.value);
    //   img.forEach((file) => {
    //     form.append("images[]", file);
    //   });

    //   axios
    //     .post(
    //       "https://stormy-chamber-88256.herokuapp.com/api/create-post",
    //       form,
    //       {
    //         headers: {
    //           "content-type": "multipart/form-data",
    //           Authorization: `Bearer ${Cookies.get("token")}`,
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // let formPost = document.getElementById("postPost");
    if (add) {
      // formPost.onsubmit = (e) => {
      //   console.log("befor e");
      //   e.preventDefault();
      //   console.log("after e");
      //   if (post) {
      //     console.log(startDate);
      //     postPost();
      //     console.log("hi");
      //   }
      // };
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
  const formPost = (e) => {
    e.preventDefault();
    if (post) {
      let inpTextarea = document.getElementById("content");
      let postdate = document.getElementById("date");
      let form = new FormData();
      form.append("service_id", props.id);
      form.append("caption", "test");
      form.append("page_name", "test");
      form.append("when_to_post", postdate.value);
      form.append("social_type", "facebook");
      form.append("content", inpTextarea.value);
      img.forEach((file) => {
        form.append("images[]", file);
      });

      axios
        .post(
          "https://stormy-chamber-88256.herokuapp.com/api/create-post",
          form,
          {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setadd(false);
          swal({
            title: "Good job!",
            text: res.data.message,
            icon: "success",
            button: "Okay!",
          }).then(() => {
            location.reload()
          })
        })
        .catch((err) => {
          console.log(err);
          swal({
            title: "Error!",
            text: "There is something wrong! try again.",
            icon: "error",
            button: "Okay!",
          })
        });
      console.log("hi");
    }
  };
  return (
    <>
      <button className="bt w-100" onClick={() => viewform()}>
        Add
      </button>
      {add && (
        <form className="car" id="postPost" onSubmit={formPost}>
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
