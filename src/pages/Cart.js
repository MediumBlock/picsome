import React, { useContext, useEffect, useState } from "react"
import { PhotoContext } from "../components/photoContext"
import CartItem from "../components/CartItem"

function Cart() {
    const [orderStatus, setOrderStatus] = useState(false)
    const { cartItems, setCartItems } = useContext(PhotoContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const cartTotal = cartItems.length * 5.99
    const cartTotalConv = cartTotal.toLocaleString("en-US", { style: "currency", currency: "USD" })


    useEffect(() => {
        if (orderStatus) {
            setTimeout(() => {
                console.log("Order Placed")
                setCartItems([])
                setOrderStatus(false)
            }, 3000)
        }
    }, [orderStatus])

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {cartTotalConv}</p>
            <div className="order-button">
                { cartItems.length > 0 && <button onClick={() => setOrderStatus(true)}>{orderStatus ? "Ordering..." : "Place Order"}</button>}
            </div>
        </main>
    )
}

export default Cart