import React from 'react'

const Client = () => {
  return (
    <div className='car client'>
      <div className="client_info row g-0">
        <div className="col-sm-4">
          <h4>client name</h4>
        </div>
        <div className="col-sm-4 col-6">
          <a href='tel:+201020384108'><i className="fa fa-phone" aria-hidden="true"></i> +201020384108</a>
        </div>
        <div className="col-sm-4 col-6">
          <a href='mailto:mahmoud@email.com'><i className="fas fa-at"></i> mahmoud@email.com</a>
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