import Sidebar from "../layouts/Sidebar"
import Layout from "../layouts/Layout"

export default function About() {
  return (
    <>
    <div className="container-xxl">
      <Sidebar />
      <div className="content dashboard">
      <Layout>
        <div className="car anc">
            <h3>Add New Client</h3>
          <form id="clientForm">
            <div className="form-floating">
              <input type="email" className="form-control" id="clientName" placeholder="name@example.com" />
              <label htmlFor="clientName">Client Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="clientPhone" placeholder="name@example.com" />
              <label htmlFor="clientPhone">Client Phone Number</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Client Email address</label>
            </div>
            {/* <div className="form-floating">
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label htmlFor="floatingSelect">Works with selects</label>
            </div> */}
            <input type="submit" value="+ Add Client" />
          </form>
        </div>
      </Layout>
      </div>
    </div>
    </>
  )
}

