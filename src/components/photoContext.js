import React, { useState, useEffect } from "react"
const PhotoContext = React.createContext()

function PhotoContextProvider(props) {
    const [photoAPI, setPhotoAPI] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => {
                setPhotoAPI(data)
            })
    }, [])


    function toggleIsFavorited(id) {
        setPhotoAPI(prev => (prev.map(item => (
            item.id === id ?
            {...item, isFavorite: !item.isFavorite} :
            item
        ))
        ))
    }

    function addToCart(img) {
        setCartItems(prev => [...prev, img])
    }

    function isInCart(id) {
       return cartItems.some(item => item.id === id)
    }

    function removeCartItem(id) {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }



    return (
        <PhotoContext.Provider value={{ photoAPI, toggleIsFavorited, cartItems, setCartItems, addToCart, isInCart, removeCartItem }}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export { PhotoContextProvider, PhotoContext }


