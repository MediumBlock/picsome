import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PhotoContextProvider } from "./components/photoContext"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <PhotoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </PhotoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);