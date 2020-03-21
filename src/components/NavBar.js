import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { ProductConsumer } from '../context'


export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          value => {
            const {cart} = value

            /* To keep the total quantity of products in each cart,
            rather than just the quantity of products */
            let totalQuantity = 0
            cart.forEach(product => totalQuantity += product.count)

            return (
              <NavWrapper
                className="navbar navbar-expand-sm navbar-dark px-sm-5"
              >
                {/*
                  https://www.iconfinder.com/icons/1243689/call_phone_icon
                  Creative Commons (Attribution 3.0 Unported);
                  https://www.iconfinder.com/Makoto_msk
                */}
                <Link to="/">
                  <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">Products</Link>
                  </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                    <span className="mr-2">
                      <i className="fas fa-cart-plus" />My Cart
                    </span>
                    <span>
                      {cart.length > 0 ? totalQuantity : null}
                    </span>
                  </ButtonContainer>
                </Link>
              </NavWrapper>
            )
          }
        }
      </ProductConsumer>
    )
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
