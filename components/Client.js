import Link from "next/link";

const Client = (props) => {
  return (
    <div className="car client">
      <div className="client_info row g-0">
        <div className="col-sm-4">
          <Link href={"/clients/" + props.id}>
            <a>
              <h4>
                {props.name} <i className="fas fa-link"></i>
              </h4>
            </a>
          </Link>
        </div>
        <div className="col-sm-4 col-6">
          <a href="tel:+201020384108">
            <i className="fa fa-phone info" aria-hidden="true"></i>{" "}
            +201020384108
          </a>
        </div>
        <div className="col-sm-4 col-6">
          <a href="mailto:mahmoud@email.com">
            <i className="fas fa-at info"></i> mahmoud@email.com
          </a>
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="service car">
          <div className="service_name">
            <i
              className="fab fa-facebook-f"
              style={{ color: "#1877f2", marginRight: "5px" }}
            ></i>
            page name
          </div>
          <div className="text-secondary">next (post/story): <strong>20/11/2022</strong></div>
        </div>
        <div className="service car">
          <div className="service_name">
            <i
              className="fab fa-instagram"
              style={{ color: "#d41f9f", marginRight: "5px" }}
            ></i>
            page name
          </div>
          <div className="text-secondary">next (post/story): <strong>20/11/2022</strong></div>
        </div>
      </div>
    </div>
  );
};

export default Client;
