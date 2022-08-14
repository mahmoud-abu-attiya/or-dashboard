import Link from "next/link"

const Client = (props) => {
  return (
    <div className='car client'>
      <div className="client_info row g-0">
        <div className="col-sm-4">
          <Link href={'/clients/' + props.id}>
            <a><h4>{props.name} <i className="fas fa-link"></i></h4></a>
          </Link>
        </div>
        <div className="col-sm-4 col-6">
          <a href='tel:+201020384108'><i className="fa fa-phone info" aria-hidden="true"></i> +201020384108</a>
        </div>
        <div className="col-sm-4 col-6">
          <a href='mailto:mahmoud@email.com'><i className="fas fa-at info"></i> mahmoud@email.com</a>
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="service car">
          <div className="service_name">
            web development
          </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
          </div>
        <div className="service car">
          <div className="service_name">
            markting
          </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Client