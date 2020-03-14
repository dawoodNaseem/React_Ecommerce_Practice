import React, { Component } from 'react'
import {ProductConsumer} from '../context'

export default class Search extends Component {
    render() {
        return (
            <div className="col-10 mx-auto col-md-8 col-lg-6 pt-5 pb-5">
            <ProductConsumer>
                {val =>{
                    return(
                    <div className="row">
                        <label>Search: </label>
                        <input type="text" className="form-control" onChange={e => val.updateSearch(e.currentTarget.value)} placeholder="Search Your Product..."/>
                    </div>
                )
                }}
                    
                
            </ProductConsumer>
            </div>
        )
    }
}

