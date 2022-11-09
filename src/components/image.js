import React, { useState, useContext } from "react"
import { PhotoContext } from "./photoContext"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({ className, img }) {
    const [isHovered, inputRef] = useHover()

    const { toggleIsFavorited, cartItems, addToCart, isInCart, removeCartItem } = useContext(PhotoContext)
    const inCart = isInCart(img.id)

    function heartIcon() {
        if (img.isFavorite) {
            return <i onClick={() => toggleIsFavorited(img.id)} className="ri-heart-fill favorite"></i>
        } else if (isHovered) {
            return <i onClick={() => toggleIsFavorited(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    function cartIcon() {
        if (inCart) {
            return <i onClick={() => removeCartItem(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if (isHovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }


    return (
        <div className={`${className} image-container`}
            ref={inputRef}
        >

            <img src={img.url}
                className="image-grid"
            />

            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default Image