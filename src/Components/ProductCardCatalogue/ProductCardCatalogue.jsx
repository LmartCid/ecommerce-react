import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../ProductsCartContext/ProductsCartContext"

function ProductCardCatalogue({ product }) {
    const { addToCart, removeToCart } = useContext(cartContext)
    const navigate = useNavigate()

    function addToCartHandler(event) {
        event.stopPropagation()
        addToCart(product)
    }

    function removeCartProductHandler(event) {
        event.stopPropagation()
        removeToCart(product)
    }

    return (
        <div onClick={() => { navigate(`/detail/${product.id}`) }} className="flex-col bg-white rounded-[10px] mt-4 mb-4 cursor-pointer">
            <div className="w-64 min-h-60 mt-4"><img src={product.imageUrl} alt={product.name} /></div>
            <div className="flex justify-center font-bold">{product.name}</div>
            <div className="flex justify-center">{product.description}</div>
            <div className="flex justify-center font-bold">{`${product.price} €`}</div>

            <div className="flex justify-center gap-2 mb-4">
                <button onClick={addToCartHandler} className="bg-black text-white w-32 rounded-[8px] cursor-pointer w-40 h-6">Añadir</button>
                <button onClick={removeCartProductHandler} className="bg-gray-200 w-16 rounded-[8px] cursor-pointer">Eliminar</button>
            </div>
        </div>
    )
}

export default ProductCardCatalogue
