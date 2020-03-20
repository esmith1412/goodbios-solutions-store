import React, { Component } from 'react'


export default class Default extends Component {
  render() {
    console.log(this.props)

    return (
      <article className="container">
        <section className="row">
          <section className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h2>Error</h2>
            <h3>
              The following URL was not found:{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              .
            </h3>
          </section>
        </section>
      </article>
    )
  }
}
