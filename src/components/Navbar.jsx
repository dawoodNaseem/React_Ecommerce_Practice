import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from ".././logo.svg"
// import styled from "styled-components"
import {ButtonContainer1} from './styles/ButtonStyle.jsx'
import {Nav} from './styles/NavStyle.jsx'
export default class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-sm bg-dark color-white navbar-dark px-sm-5">
                
                <Link to="/"><img src={logo} alt="Store"/></Link>
                <ul className="navbar-nav aligh-items-center">
                    <li className="nav-item pt-1 mr-5 ml-5 ">
                        <Link to="/" className="nav-link"> Products</Link>
                    </li >
                    <li className="nav-item ml-auto" >
                    <Link to="/cart" className="nav-link">
                        <ButtonContainer1>
                            <i className="fas fa-cart-plus  mr-2"></i>
                             my cart
                        </ButtonContainer1>
                        </Link>
                    </li>
                 </ul>
            </Nav>
        )
        
    }
}


