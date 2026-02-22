import { cartContext } from "../ProductsCartContext/ProductsCartContext"
import { useContext } from "react"

function ProductsInCart({ product }) {

    const {removeToCart} = useContext(cartContext)

    return (
        <div className="flex items-center gap-4 mb-4" >
            <div className="w-24 h-24 flex items-center"><img src={product.imageUrl} alt={product.name} /></div>
            <div className="flex flex-col justify-center items-start w-[512px]">
                <div className="font-bold">{product.name}</div>
                <div>{`${product.price} € (x ${product.quantity})`}</div>
            </div>
            <button onClick={() => { removeToCart(product) }} className="bg-black text-white rounded-[8px] w-64 mr-4 h-10 cursor-pointer">Eliminar</button>
        </div>
    )
}

export default ProductsInCart