import React from 'react'

export default function Title({ name, title }) {
  return (
    <article className="row">
      <section className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">{name} {title}</h1>
      </section>
    </article>
  )
}
