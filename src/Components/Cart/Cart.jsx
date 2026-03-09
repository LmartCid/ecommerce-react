import { useContext } from "react"
import { cartContext } from "../ProductsCartContext/ProductsCartContext"
import ProductsInCart from "../ProductsInCart/ProductsInCart"

function Cart() {

    const { cartProducts, getTotalPrice } = useContext(cartContext)
    const totalPrice = getTotalPrice()

    if (cartProducts.length === 0) {
        return  <div className="font-bold">No se encuentran productos añadidos en el carrito</div>   
    }

    return (
        
            <div className="flex flex-col items-center bg-white rounded-[10px]">
                {
                    cartProducts.map((product) => (
                        <ProductsInCart key={product.id} product={product} />
                    ))
                }

                <div className="flex flex-col">
                    <div className="flex justify-between w-full max-w-[350px] mx-4 ">
                        <div className="font-bold text-[20px]">Total: </div>
                        <div className="font-bold text-[20px]">{`${totalPrice} €`}</div>
                    </div>
                    <button className="bg-black text-white cursor-pointer w-[95%] mx-4 min-h-[45px] rounded-[10px] my-4">Proceder al pago</button>
                </div>
            </div>
    )
}
export default Cart