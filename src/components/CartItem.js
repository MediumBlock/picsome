import React, { useContext, useState } from "react"
import { PhotoContext } from "./photoContext"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({ item }) {
    const { removeCartItem } = useContext(PhotoContext)
    const [isHovered, inputRef] = useHover()


    return (
        <div className="cart-item">
            <i onClick={() => removeCartItem(item.id)}
               className={isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
               ref={inputRef}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem