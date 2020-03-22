import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import Policy from './components/Policy'
import About from './components/About'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/details" component={ Details } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/policy" component={ Policy} />
          <Route exact path="/about" component={ About } />
          <Route component={ Default } />
        </Switch>
        <Footer />
        <Modal />
      </React.Fragment>
    )
  }
}

export default App;
