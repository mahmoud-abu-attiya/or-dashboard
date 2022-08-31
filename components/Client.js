import Link from "next/link";

const Client = (props) => {
  return (
    <div className="car client">
      <div className="client_info row g-0">
        <div className="col-sm-4">
          <Link href={props.url}>
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
            {props.phone}
          </a>
        </div>
        <div className="col-sm-4 col-6">
          <a href="mailto:mahmoud@email.com">
            <i className="fas fa-at info"></i>
            {props.email}
          </a>
        </div>
      </div>
      <hr />
      <div className="services">
        {/* <div className="service car">
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
        </div> */}
        { props.services ? props.services.map((service) => {
          return (
            <div className="service car" key={service.id}>
              <div className="service_name">
                <i
                  className="fab fa-facebook-f"
                  style={{ color: "#1877f2", marginRight: "5px" }}
                ></i>
                page name
              </div>
              <div className="text-secondary">
                next (post/story): <strong>20/11/2022</strong>
              </div>
            </div>
          );
        }) : (
          <div className="service car">No Services for this client yet.</div>
        )}
      </div>
    </div>
  );
};

export default Client;
