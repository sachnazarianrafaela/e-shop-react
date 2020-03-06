import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Modal from './components/Modal';
import Home_Page from "./components/Home_Page";
import Login_Page from "./components/Login_Page";
import Contact_Page from "./components/Contact_Page";
import Sign_up from "./components/Sign_up";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/ProductList" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/Home" component={Home_Page} />
          <Route exact path="/Login_Sign up"  component={Login_Page} />
          <Route exact path="/Sign_up"  component={Sign_up} />
          <Route exact path="/Contact"  component={Contact_Page} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
