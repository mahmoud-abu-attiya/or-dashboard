import React from "react";
import Link from "next/link";

const NewPosts = () => {
  // const date = new Date();
  return (
    <div className="car">
      <h2>New Posts</h2>
      <div className="posts row g-3">
        <div className="col-md-6">
          <Link href="/customers/socialMedia">
            <div className="post bord shadow-sm">
              <h5>
                <i className="fab fa-facebook-f"></i> page name
              </h5>
              <div className="Pname">post name</div>
              <div className="Pdate">10/07/2022 5 AM</div>
            </div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link href="/customers/socialMedia">
            <div className="post bord shadow-sm">
              <h5>
                <i className="fab fa-facebook-f"></i> page name
              </h5>
              <div className="Pname">post name</div>
              <div className="Pdate">10/07/2022 5 AM</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
