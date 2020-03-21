import React, { Component } from 'react'


export default class Footer extends Component {
  render() {
    const this_year = new Date().getFullYear()

    return (
      <React.Fragment>
        {/* TODO: Create three columns for each piece of information */}
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
        </footer>
      </React.Fragment>
    )
  }
}
