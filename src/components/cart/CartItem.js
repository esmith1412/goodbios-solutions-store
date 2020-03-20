import React, { Component } from 'react'


export default function CartItem({ item, value }) {
  const {id, title, img, price, total, count} = item
  const {increment, decrement, removeItem} = value

  return (
    <article className="row my-2 text-capitalize text-center">
      {/* Product Image */}
      <section className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </section>

      {/* Product Name */}
      <section className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>{title}
      </section>

      {/* Product Price */}
      <section className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>{price}
      </section>

      {/* Quantity and Increment/Decrement Buttons */}
      <section className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <section className="d-flex justify-content-center">
          <section>
            <span
              className="btn btn-black mx-1"
              onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => increment(id)}>
              +
            </span>
          </section>
        </section>
      </section>

      {/* Remove from Cart Button */}
      <section className="col-10 mx-auto col-lg-2">
        <section className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </section>
      </section>

      {/* Product Total */}
      <section className="col-10 mx-auto col-lg-2">
        <strong>Item Total : $ {total}</strong>
      </section>

    </article>
  )
}
