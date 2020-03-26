import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  const this_year = new Date().getFullYear()

  return (
    <React.Fragment>
      <hr />
      <footer className="container-fluid d-sm-flex justify-content-sm-around align-items-sm-center">
        <section>
          &copy;{this_year} - GoodBIOS Solutions
        </section>
        <section>
          <a href="mailto:admin@goodbiossolutions.info">
            Contact Us
          </a>
        </section>
        <section>
          <Link to="/policy">Privacy Policy</Link>
        </section>
        <section>
          <Link to="/terms">Terms and Conditions</Link>
        </section>
      </footer>
    </React.Fragment>
  )
}
