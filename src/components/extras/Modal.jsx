import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../../context'
import {ButtonContainer1, ButtonContainer2} from '../styles/ButtonStyle'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer >
                {value => {
                    const {modalOpen, closeModal} = value
                    const {img, title, price} = value.modalProduct
                    if(!modalOpen){
                        return null
                    }else{
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-9 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>item added to the cart</h5>
                                            <img src={img} alt="Product Image" className="img-fluid" />
                                            <h4>{title}</h4>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer1 style={{color:'black'}} onClick={()=>closeModal()}>
                                                    continue shopping
                                                </ButtonContainer1>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer2 onClick={()=>closeModal()}>
                                                    go to cart
                                                </ButtonContainer2>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                     
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    
    #modal{
        background:var(--mainWhite);
        border-radius: 50px;
    }
`
