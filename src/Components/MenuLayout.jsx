import { Outlet, Link } from "react-router-dom"
import { cartContext } from "./ProductsCartContext"
import { useContext } from "react"

const URL_CART = "/cart"

function MenuLayout() {

    const { cartItems, getTotalProducts } = useContext(cartContext)
    const totalProducts = getTotalProducts(cartItems)

    return (
        <>
            <nav className="flex min-h-16">
                <div className="flex justify-center items-center font-bold w-96 ml-96">Mini Shop</div>
                <div className="flex justify-end items-center gap-4 w-full">
                    <Link className="cursor-pointer" to="/">Inicio</Link>
                    <Link className="font-bold mr-4 cursor-pointer" to={URL_CART}>{`Carrito (${totalProducts})`}</Link>
                </div>
            </nav>

            <main className="flex flex-col justify-center items-center bg-gray-100 rounded-[10px] mx-8 h-2/3 min-h-[85%]">
                <Outlet />
            </main>
        </>
    )
}
export default MenuLayout