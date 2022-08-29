import React from "react";
import img from "../../public/images/avatar2.png";
import Image from "next/image";

const Post = () => {
  return (
    <div className="post car">
      <h4>page name</h4>
      <div className="row g-3">
        <div className="col-md-3">
          <h4>Image</h4>
          {/* <img src={img} alt="post" /> */}
          <div className="img-container">
            <Image src={img} alt="post name" />
          </div>
        </div>
        <div className="col-md-6 post-info">
          <h4>title</h4>
          <div className="title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, iste officia commodi aliquid, ex optio impedit amet necessitatibus, harum itaque voluptates consequuntur voluptate animi repellat sapiente magni pariatur ad totam.
          </div>
          <div className="date">post date: <strong>10/05/2022 4 AM</strong></div>
        </div>
        <div className="col-md-3">
          <div className="btns">
            <button className="bord shadow-sm"><i className="fas fa-check"></i> Abrove</button>
            <button className="bord shadow-sm"><i className="fas fa-times"></i> Cansel</button>
          </div>
        </div>
        <div className="col-12">
          <div className="comment">
            <input type="text" id="" placeholder="Add Comment..." />
            <button className="bord">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
