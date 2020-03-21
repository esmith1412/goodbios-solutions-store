import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'


export default class Details extends Component {
  render() {

    return (
      <ProductConsumer>
        {value => {
          const {id, company, img, info, price, title, inCart } = value.detailProduct

          return (
            <article className="container py-5">
              {/* Title */}
              <section className="row">
                <section className="col-10 mx-auto text-center text-slated text-blue my-5">
                  <h1>{title}</h1>
                </section>
              </section>

              {/* Product Info */}
              <section className="row">
                {/* Product Image */}
                <section className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </section>
                {/* Product Description */}
                <section className="col-10 mx-auto col-md-6 my-3">
                  <h2>{title}</h2>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>{price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Detailed Information:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <section>
                    <Link to="/">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={ inCart ? true : false }
                      onClick={ () => {
                        value.addToCart(id)
                        value.openModal(id)
                      }}
                    >
                      { inCart ? "In Cart" : "add to cart" }
                    </ButtonContainer>
                  </section>
                </section>
              </section>
            </article>
          )
        }}
      </ProductConsumer>
    )
  }
}
