import React from "react";
import AddPost from "./AddPost";
import Image from "next/image";
import img from "../../public/images/avatar6.png";

const Page = () => {
  return (
    <div className="page car">
      <h3>Page name</h3>
      <AddPost />
      <div className="posts">
        <div className="row g-3 w-100 m-0">
          {Array(3)
            .fill(" ")
            .map((post, index) => {
              return (
                <div className="post car col-12" key={index}>
                  <div className="row">
                    <div className="col-md-4">
                      <Image src={img} alt="img" />
                    </div>
                    <div className="col-md-8">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta, doloribus ipsum? Maiores eos aperiam
                        optio, molestias suscipit doloribus minima, rem,
                        explicabo necessitatibus corporis voluptates possimus
                        animi quisquam esse velit culpa.
                      </p>
                      <div className="foo">
                        <div className="post-date">
                          Date: <strong>1/2/2022 - 2 PM</strong>
                        </div>
                      <div className="btns">
                        <button className="bord-2" id="editPost">
                          Edit
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="bord-2" id="deletePost">
                          Delete
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
