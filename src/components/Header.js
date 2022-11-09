import React, { useContext } from "react"
import { PhotoContext } from "./photoContext"
import { Link } from "react-router-dom"


function Header() {

    const { cartItems } = useContext(PhotoContext)
    function shoppingCart() {
        if(cartItems.length > 0) {
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        } else {
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }

    return (
        <header>
            <Link to="/picsome">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart" >
                {shoppingCart()}
            </Link>
        </header>
    )
}

export default Header
