import React, { Component } from 'react'


export default function CartColumns() {
  return (
    <article className="container-fluid text-center d-none d-lg-block">
      <section className="row">


        <section className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">products</p>
        </section>

        <section className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name of product</p>
        </section>

        <section className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </section>

        <section className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </section>

        <section className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </section>

        <section className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </section>


      </section>
    </article>
  )
}
