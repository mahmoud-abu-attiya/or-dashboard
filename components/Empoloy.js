import React from "react";
import Image from "next/image";
import Link from "next/link";

const Empoloy = (props) => {
  return (
    <div className="car staff-card">
      <Link href={"/profile/" + props.url}>
      <div className="head row g-3">
        <div className="col-4">
        <div className="staff-img">
          <Image src={props.photo} alt={props.name} />
        </div>
        </div>
        <div className="info col-8">
          <h5>{props.name}</h5>
          {props.position}
        </div>
      </div>
      </Link>
      <div className="social">
        {props.facebook && (
          <a href="face" style={{ color: "#1877f2" }}>
            <i className="fab fa-facebook-f"></i>
          </a>
        )}
        {props.twitter && (
          <a href="twitter" style={{ color: "#1d9bf0" }}>
            <i className="fab fa-twitter"></i>
          </a>
        )}
        {props.instagram && (
          <a href="insta" style={{ color: "#d41f9f" }}>
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {props.linkedin && (
          <a href="link" style={{ color: "#0a66c2" }}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Empoloy;
