import React, { Component } from 'react'
import Products from './Products'
import Title from './extras/Title'

//importing consumer of api from context.jsx
import { ProductConsumer } from '../context'


export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pb-4 ">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer >
                                {val => {
                                    return val.Products.map(anyVariable =>{
                                        return <Products key={anyVariable.id} product={anyVariable} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

                
            </React.Fragment>
        )
    }
}
