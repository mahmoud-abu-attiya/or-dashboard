import Layout from "../../../layouts/Layout";
import { useEffect, useState } from "react";
import AddServiceForm from "../../../components/AddServiceForm";
import Calender from "../../../components/dashboard/Calender";
import axios from "axios";
import Cookies from "js-cookie";
import Page from "../../../components/employee/Page";
import AddPost from "../../../components/employee/AddPost";
import Image from "next/image";
import img from "../../../public/images/user-placeholder.png";
import swal from "sweetalert";

const Details = () => {
  const [addServices, setAddServices] = useState(false);
  const [user, setuser] = useState({});
  const [services, setServices] = useState();
  const [posts, setPosts] = useState();
  let token = Cookies.get("token");
  const deletPost = (serviceId, postId) => {
    axios.delete(`https://stormy-chamber-88256.herokuapp.com/api/delete-post?service_id=${serviceId}&post_id=${postId}` ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
      swal({
        title: "Good job!",
        text: res.data.message,
        icon: "success",
        button: "Okay!",
      }).then(() => {
        location.reload()
      })
        }).catch((err) => {
      console.log(err);
      swal({
        title: "Error!",
        text: "There is some thing error! try log in again.",
        icon: "error",
        button: "Okay!",
      });
    })
  }
  useEffect(() => {
    const id = window.location.pathname.slice(20);
    // axios.get(
    //   "https://stormy-chamber-88256.herokuapp.com/api/get/client?id=" + id,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${Cookies.get("token")}`,
    //     },
    //   }
    // ).then((res) => {
    //   setuser(res.data)
    //   setServices(res.data.services)
    //   console.log(res.data.services)
    // }).catch((err) =>{
    //   console.log(err);
    // })
    axios
      .get("https://stormy-chamber-88256.herokuapp.com/api/employee-services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setServices(res.data.employee_services);
        console.log(res.data);
        let user = res.data.employee_services.find((ele) => {
          // ele.id
          return ele.client_id == id;
        });
        setuser(user);
        console.log(user.posts);
        setPosts(user.posts);
        console.log(posts[12].post_images[0].image_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className="car client_page">
        <div className="client">
          <div className="client_info">
            <h2>{user.client_name}</h2>
            {user.phone && (
              <div className="mb-2">
                <a href={"tel:" + user.phone}>
                  <i className="fa fa-phone info" aria-hidden="true"></i>{" "}
                  {user.phone}
                </a>
              </div>
            )}
            {user.email && (
              <div className="">
                <a href={"mailto:" + user.email}>
                  <i className="fas fa-at info"></i> {user.email}
                </a>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className="client_services">
          <div className="page car">
            <div className="posts">
              <div className="row g-3 w-100 m-0">
                {services ? (
                  services.map((service) => {
                    return (
                      <>
                        <AddPost id={service.service_id} />
                        {posts.length != 0 ? posts.map((post) => {
                          return (
                            <div className="post car col-12" key={post.post_id}>
                              <div className="row">
                                <div className="col-md-4">
                                  {post.post_images.length != 0 ? (
                                    <div key={post.post_images[0].image_id}>
                                      img
                                      <img
                                        src={post.post_images[0].image_url}
                                        alt="img"
                                      />
                                    </div>
                                  ) : (
                                    <Image src={img} alt="img" />
                                  )}
                                </div>
                                <div className="col-md-8">
                                  {post.post_content ? (
                                    <p>{post.post_content}</p>
                                  ) : (
                                    <h3>No content.</h3>
                                  )}
                                  <div className="foo">
                                    <div className="post-date">
                                      Date: <strong>{post.when_to_post}</strong>
                                    </div>
                                    <div className="btns">
                                      <button className="bord-2" id="editPost" disabled>
                                        Edit
                                        <i className="fas fa-edit"></i>
                                      </button>
                                      <button
                                        className="bord-2"
                                        id="deletePost"
                                        onClick={() => deletPost(service.service_id, post.post_id)}
                                      >
                                        Delete
                                        <i className="fas fa-trash-alt"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }) : (
                          <div className="car">non</div>
                        )}
                      </>
                    );
                  })
                ) : (
                  <div className="car">There is no services.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
