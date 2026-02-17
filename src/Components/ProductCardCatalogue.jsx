import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "./ProductsCartContext"

function ProductCardCatalogue({ product }) {
    const navigate = useNavigate()

    return (
        <div onClick={() => {navigate(`/detail/${product.id}`) }} className="flex-col bg-white rounded-[10px] mt-4 mb-4 cursor-pointer">
            <div className="w-64 min-h-60 mt-4"><img src={product.imageUrl} alt={product.name} /></div>
            <div className="flex justify-center font-bold">{product.name}</div>
            <div className="flex justify-center">{product.description}</div>
            <div className="flex justify-center font-bold">{`${product.price} €`}</div>
            <ProductCardCatalogueOptions product={product} />
        </div>
    )
}

function ProductCardCatalogueOptions({ product }) {
    const { addToCart, removeCartProduct } = useContext(cartContext)

    function addToCartHandler(e) {
        e.stopPropagation()
        addToCart(product)
    }

    function removeCartProductHandler(e) {
        e.stopPropagation()
        removeCartProduct(product)
    }

    return (
        <div className="flex justify-center gap-2 mb-4">
            <button onClick={addToCartHandler} className="bg-black text-white w-32 rounded-[8px] cursor-pointer w-40 h-6">Añadir</button>
            <button onClick={removeCartProductHandler} className="bg-gray-200 w-16 rounded-[8px] cursor-pointer">Eliminar</button>
        </div>
    )
}

export default ProductCardCatalogue
