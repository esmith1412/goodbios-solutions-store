import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Policy from './Policy'


export default class Footer extends Component {
  render() {
    const this_year = new Date().getFullYear()

    return (
      <React.Fragment>
        <hr />
        <footer className="container-fluid d-flex justify-content-sm-around">
          <section>
            &copy;{this_year} - GoodBIOS Solutions
          </section>
          <section>
            <a href="mailto:admin@goodbiossolutions.info">
              Contact Us
            </a>
          </section>
          <Link to="/policy">
            <a href="">Privacy Policy</a>
          </Link>
          <Link to="/about">
            <a href="">About Us</a>
          </Link>
        </footer>
      </React.Fragment>
    )
  }
}
