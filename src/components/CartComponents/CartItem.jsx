import React from 'react'

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item
    const {increment, decrement, removeItem} = value
    return (
        <div className="row my-5 text-capitalize text-center">
            {/* Image */}
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width:'5rem',height:'5rem'}} alt="Product Image" className="img-fluid" />
                </div>

            {/* Title */}
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product : </span>{title}
                </div>

            {/* Price */}
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">price : </span>$ {price}
                </div>

            {/* Quantity */}
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-black mx-1" onClick={()=> decrement(id)}>-</button>
                        <button className="btn btn-black mx-1" >{count}</button>
                        <button className="btn btn-black mx-1" onClick={()=> increment(id)}>+</button>
                    </div>
                </div>

            {/* Delete */}
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={()=> removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>

            {/* Total */}
                <div className="col-10 mx-auto col-lg-2">
                    <strong className="d-lg-none">item total : </strong>$ {total}
                </div>
        </div>
    )
}
