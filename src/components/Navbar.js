import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-white navbar-dark px-sm-5">
        <Link to="/Home">
          <img src={logo} width="150" height="130" alt="store" className="navbar-brand"/>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/ProductList" className="nav-link  text-dark ">
              Store
            </Link>
          </li>
        
          <li className="nav-item ml-5">
            <Link to="/Login_Sign up" className="nav-link text-dark">
            Login_Sign up
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/Contact" className="nav-link  text-dark">
              Contact
            </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-shopping-cart"></i>
              </span>
              Cart

        
           
            </ButtonContainer> 
        </Link>

</nav>

      
    )
  }
}


const NavbarWrapper = styled.nav`
    background: var(--mainGold);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
`


