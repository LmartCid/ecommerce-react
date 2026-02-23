import { useParams } from "react-router-dom"
import products from "../../products"
import { useContext } from "react"
import { cartContext } from "../ProductsCartContext/ProductsCartContext"

function ProductDetail() {
    const { addToCart, removeToCart } = useContext(cartContext)
    const { id } = useParams()

    const productId = Number(id)
    const productSelected = products.find((product) => (product.id === productId))

    if (!productSelected) {
        return <div className="font-bold">Producto NO encontrado</div>
    }

    return (
        <div className="rounded-[10px] bg-white flex justify-center gap-8 w-2/3 mt-4">
            <div className="w-64"><img src={productSelected.image} /></div>
            <div className="flex flex-col gap-4">
                <div className="font-bold text-xl">{productSelected.name}</div>
                <div className="text-lg text-gray-500">{productSelected.detailInfo}</div>
                <div className="font-bold text-[26px]">{`${productSelected.price} €`}</div>

                <div className="flex gap-4">
                    <button onClick={() => { addToCart(productSelected) }} className="bg-black rounded-[8px] text-white cursor-pointer w-40 h-10">Añadir al carrito</button>
                    <button onClick={() => { removeToCart(productSelected) }} className="bg-gray-100 rounded-[8px] cursor-pointer w-32 h-10">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail