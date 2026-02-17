import { createContext, useState } from "react"

const MIN_AMOUNT = 1
export const cartContext = createContext(null)

function ProductsProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    function addToCart(product) {
        setCartItems((prev) => {
            const existing = prev.some((prod) => (prod.id === product.id))
            if (existing) {
                return prev.map((prod) => (prod.id === product.id ? { ...prod, quantity: prod.quantity + MIN_AMOUNT } : prod))
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    function removeCartProduct(product) {
        setCartItems((prev) => {
            const itemInCard = prev.find((item) => (item.id === product.id))
            if (itemInCard && itemInCard.quantity > MIN_AMOUNT) {
                return prev.map((item) => (item.id === itemInCard.id ? { ...itemInCard, quantity: itemInCard.quantity - MIN_AMOUNT } : item))
            }
            if (itemInCard && itemInCard.quantity <= MIN_AMOUNT) {
                return prev.filter((item) => (item.id !== itemInCard.id))
            }
            if (!itemInCard) {
                return prev
            }
        })
    }

    function getTotalProducts(cartItems) {
        const INITIAL_AMOUNT = 0
        const totalProducts = cartItems.reduce((acc, product) => (acc + (product.quantity)), INITIAL_AMOUNT)
        return totalProducts
    }
    const valuesContext = { cartItems, setCartItems, addToCart, removeCartProduct, getTotalProducts }

    return <cartContext.Provider value={valuesContext}>{children}</cartContext.Provider>
}
export default ProductsProvider
