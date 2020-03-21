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
                  Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                */}
                <Link to="/">
                  <img src={logo} alt="store" height="75" width="75" />
                </Link>
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">Store</Link>
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
