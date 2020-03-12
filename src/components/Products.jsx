import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'

export default class Products extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
            <Product_style className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <ProductConsumer>
                        {/* Card IMAGE */}
                        {value => (
                            <div className="p-5 img-container"
                            onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="Product image" className="card-img-top"/>
                                </Link>
                                <button 
                                    className=" btn btn-primary card-btn" 
                                    disabled={inCart ? true : false} 
                                    onClick={()=> {
                                        value.addCart(id)
                                        value.openModal(id)
                                    }}>
                                        {inCart ? (<p disabled className="pb-0">In Cart</p>) : (<i className="fas fa-cart-plus"/>)}
                                </button>
                            </div>
                        )}
                        
                    </ProductConsumer>

                    {/* Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <h3>{title}</h3>
                        <h4 style={{color:'red',border:'2px solid'}} className="p-1">$ {price}</h4>
                        
                    </div>
                </div>
                
            </Product_style>
        )
    }
}

// using PropTypes for defining variable's actual dataTypes

Products.propTypes = {
    product:propTypes.shape({
        id:propTypes.number,
        title:propTypes.string,
        price:propTypes.number,
        img:propTypes.string,
        inCart:propTypes.bool
    }).isRequired
}
// 

// Using Styled-Components


const Product_style = styled.div`
.card{
    border-color: transparent;
    transition:all 0.7s ease;

}
.card-footer{
    transition:all 0.7s ease;
}
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.4);
            box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.4);
        }
    }
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition:all 0.7s ease-in-out;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.card-btn{
    position: absolute;
    right:0;
    bottom:0;
    font-size: 1.4rem;
    border-radius: 1rem 0 0 0 ;
    transform: translate(100%, 100%);
    transition:all 0.7s ease-in-out;
}
.img-container:hover .card-btn{
    transform: translate(0%, 0%);
}
.card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
}
`
