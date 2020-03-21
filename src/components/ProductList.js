import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import Introduction from './Introduction'
import { ProductConsumer } from '../context'


export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <article className="py-5">
          <section className="container">
            <Introduction />
            <hr />
            <section className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product}/>
                  })
                }}
              </ProductConsumer>
            </section>
          </section>
        </article>
      </React.Fragment>
      //<Product />
    )
  }
}
