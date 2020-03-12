import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer1, ButtonContainer2} from './styles/ButtonStyle'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, title, price, info, inCart} = value.detailProduct
                    return(
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* End Title */}

                            {/* Product Detail */}
                            <div className="row">
                                {/* Product Image */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="Product Image" className="img-fluid"/>
                                </div>
                                
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    {/* Product Model */}
                                    <h2>Model : {title}</h2>

                                    {/* Product Company */}
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: {company}
                                    </h4>

                                    {/* Product Price */}
                                    <h4 className="text-blue">
                                        <strong>Price : ${price}</strong>
                                    </h4>

                                    {/* Product Info */}
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about this product 
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to= '/'>
                                            <ButtonContainer1 style={{color:'black'}}>Back to Products</ButtonContainer1>
                                        </Link>
                                        <ButtonContainer2 
                                        disabled={inCart ? true : false}
                                        onClick={()=> {
                                            value.addCart(id)
                                            value.openModal(id)
                                        }}>
                                                {inCart ? "In Cart" : "Add To Cart"}
                                        </ButtonContainer2>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
