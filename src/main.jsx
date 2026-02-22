import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"
import ProductsProvider from './Components/ProductsCartContext/ProductsCartContext.jsx'


createRoot(document.getElementById('root')).render(

  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
)
