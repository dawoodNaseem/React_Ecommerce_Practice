import React, { Component } from 'react'
import Products from './Products'
import Title from './extras/Title'

//importing consumer of api from context.jsx
import { ProductConsumer } from '../context'
import Search from './Search'


export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pb-4 ">
                    <div className="container">
                        <Search />
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer >
                                {val => {
                                    let serachPro = val.Products.filter((pro)=>{
                                        return(
                                            pro.title.toLowerCase().indexOf(val.search) !== -1
                                        )
                                    })
                                    return serachPro.map(anyVariable =>{
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
