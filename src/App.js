import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom"

function App() {
    return (
        <div>

            <Header />

            <Routes>
                <Route index path="/picsome" element={<Photos />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>


        </div >
    )
}

export default App