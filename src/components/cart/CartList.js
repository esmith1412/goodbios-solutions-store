import React, { Component } from 'react'
import CartItem from './CartItem'


export default function CartList({ value }) {
  const {cart} = value

  return (
    <article className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />
      })}
    </article>
  )
}