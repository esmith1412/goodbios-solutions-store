import React, { Component } from 'react'
import { storeProducts } from './data'


const ProductContext = React.createContext()


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
    this.setProducts()
  }

  setProducts = () => {
    let tempProducts = JSON.parse( JSON.stringify(storeProducts) )
    this.setState( () => {
      return {products: tempProducts}
    })
  }

  getItem = id => {
    return this.state.products.find(product => product.id == id)
  }

  handleDetail = id => {
    const product = this.getItem(id)
    this.setState( () => {
      return {detailProduct: product}
    })
  }

  addToCart = id => {
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf( this.getItem(id) )
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price

    this.setState(
      () => {
        return {
            products: tempProducts,
            cart: [...this.state.cart, product]
        }
      },
      () => {
        this.addTotals()
      }
    )
  }

  openModal = id => {
    const product = this.getItem(id)
    this.setState( () => {
      return {modalProduct: product, modalOpen: true}
    })
  }

  closeModal = () => {
    this.setState( () => { return {modalOpen: false} })
  }

  increment = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id == id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count++
    product.total = product.count * product.price

    this.setState(
      () => {
        return {cart: [...tempCart]}
      },
      () => {
        this.addTotals()
      }
    )
  }

  decrement = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id == id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    // To not decrement, if quantity is one; remove button should be used instead.
    if (product.count == 1) {
      return null
    }
    else {
      product.count--
      product.total = product.count * product.price

      this.setState(
        () => {
          return {cart: [...tempCart]}
        },
        () => {
          this.addTotals()
        }
      )
    }
  }

  removeItem = id => {
    let tempProducts = [...this.state.products]
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id)

    const index = tempProducts.indexOf( this.getItem(id) )
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    this.setState(
      () => {
        return {
          cart: [...tempCart], products: [...tempProducts]
        }
      },
      () => {
        this.addTotals()
      }
    )
  }

  clearCart = () => {
    this.setState(
      () => {
        return {cart: []}
      },
      () => {
        this.setProducts()
        this.addTotals()
      }
    )
  }

  addTotals = () => {
    let subTotal = 0
    this.state.cart.map(item => { subTotal += item.total })
    const tempTax = subTotal * 0.058
    const tax = parseFloat( tempTax.toFixed(2) )
    const total = subTotal + tax

    this.setState( () => {
      return {
          cartSubTotal: subTotal,
          cartTax: tax,
          cartTotal: total
        }
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        { this.props.children }
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
