import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = {
        Products:[],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal: 0
    }

    getItem = (id) => {
        const product = this.state.Products.find(item => item.id === id)
        return product
    }
    handleDetail = (id) =>{
        const product = this.getItem(id)
        this.setState(()=> {
            return {detailProduct:product}
        })
    }


    addCart = (id) =>{
        let tempProducts = [...this.state.Products]
        const index = tempProducts.indexOf(this.getItem(id))
        let product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        this.setState(()=>{
            return {
                Products:tempProducts,
                cart:[...this.state.cart, product]
            }
        },()=> {
            this.addTotal()
        })
    }


    componentDidMount(){
        this.setProducts()
    }
    setProducts = () => {
        let changeProducts = []
        storeProducts.forEach(item =>{
            const singleItem = {...item}
            changeProducts = [...changeProducts, singleItem]
        })
        this.setState(()=>{
            return {Products: changeProducts}
        })
    }


    // Modal functions
    openModal = (id) =>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    // Cart functions
    increment = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        product.count = product.count + 1
        product.total = product.count * product.price

        this.setState(()=>{
            return {
                cart:[...tempCart]
            }
        },()=>{
            this.addTotal()
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        product.count = product.count - 1
        if(product.count === 0){
            this.removeItem(id)
        }else{

        
        product.total = product.count * product.price

        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },()=>{
            this.addTotal()
        })
    }
    }

    removeItem = (id) => {
        let tempProduct = [...this.state.Products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProduct.indexOf(this.getItem(id))
        let removedProduct = tempProduct[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0

        this.setState(()=> {
            return {
                cart: [...tempCart],
                Products: [...tempProduct]
            }
        },()=> {
            this.addTotal()
        })
    }

    clearCart = () => {
        this.setState(()=>{
            return{
                cart:[],
                cartSubTotal:0,
                cartTax:0,
                cartTotal:0
            }
        },()=> {
            this.setProducts()
        })
        
    }
    addTotal = () => {
        let subTotal = 0
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(()=> {
            return {
                cartSubTotal : subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    } //Call this method in addToCart method 

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addCart:this.addCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {/* <button onClick={this.tester}>Test</button> */}
                {this.props.children}
            </ProductContext.Provider>
        )
    }

        // For Checking the issue that by changing a value in state also changes it in data. if we directly pass data into state without using setState method then this issue occurs.

// tester = () => {
//     console.log('State Product:' , this.state.Products[0].inCart)
//     console.log('Data Product:' , storeProducts[0].inCart)

//     const tempProducts = [...this.state.Products]
//     tempProducts[0].inCart = true
//     this.setState(()=> {
//         return {Product:tempProducts}
//     }, ()=>{
//         console.log('State Product:' , this.state.Products[0].inCart)
//         console.log('Data Product:' , storeProducts[0].inCart)
//     })
// }


}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
