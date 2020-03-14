import React from 'react'
import {Link} from 'react-router-dom'


export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-center">
                        <Link to="/">
                            <button 
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={() => clearCart()}
                                >
                                    clear cart
                            </button>
                        </Link>
                        <h4>
                            <span className="text-title">
                                subtotal : 
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h4>
                        <h4>
                            <span className="text-title">
                                tax : 
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h4>
                        <h3>
                            <span className="text-title">
                                total : 
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h3>
                        {/* <Paypal total={cartTotal} clearCart={clearCart} history={history} /> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
