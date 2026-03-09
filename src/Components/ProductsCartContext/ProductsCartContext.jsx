import { createContext, useState } from "react"
import products from "../../products"


const MIN_AMOUNT = 1
export const cartContext = createContext(null)

function ProductsProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    function addToCart(product) {
        setCartProducts((prev) => {
            const existingProduct = prev.some((prod) => (prod.id === product.id))
            if (existingProduct) {
                return prev.map((prod) => (prod.id === product.id ? { ...prod, quantity: prod.quantity + MIN_AMOUNT } : prod))
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    function removeToCart(productToRemove) {
        setCartProducts((prev) => {
            const productInCard = prev.find((product) => (product.id === productToRemove.id))
            if (productInCard && productInCard.quantity > MIN_AMOUNT) {
                return prev.map((product) => (product.id === productInCard.id ? { ...productInCard, quantity: productInCard.quantity - MIN_AMOUNT } : product))
            }
            if (productInCard && productInCard.quantity <= MIN_AMOUNT) {
                return prev.filter((product) => (product.id !== productInCard.id))
            }
            if (!productInCard) {
                return prev
            }
        })
    }

    function getTotalProducts() {
        return cartProducts.reduce((totalQuantity, product) => (totalQuantity + (product.quantity)), 0)
    }

    function getTotalPrice() {
        return cartProducts.reduce((totalAmount, product) => (totalAmount + (product.price * product.quantity)), 0).toFixed(2)
    }

    function getProductById(id) {
        return products.find((product) => product.id === id)
    }

    const valuesContext = { cartProducts, addToCart, removeToCart, getTotalProducts, getTotalPrice, getProductById }

    return <cartContext.Provider value={valuesContext}>{children}</cartContext.Provider>
}
export default ProductsProvider
