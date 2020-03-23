import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Footer extends Component {
  render() {
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
            <Link to="/policy">
              <a href="">Privacy Policy</a>
            </Link>
          </section>
          <section>
            <Link to="/terms">
              <a href="">Terms and Conditions</a>
            </Link>
          </section>
        </footer>
      </React.Fragment>
    )
  }
}
