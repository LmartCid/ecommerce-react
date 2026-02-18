import { useParams } from "react-router-dom"
import products from "../products"
import DetailProductCard from "./ProductCardDetail"

function ProductDetail() {
    const { id } = useParams()

        const productId = Number(id)
        const productSelected = products.find((product) => (product.id === productId))

        if(!productSelected) { 
            return <div className="font-bold">Producto NO encontrado</div>
        }
    
    return (
        <>
        <DetailProductCard productSelected={productSelected} />   
        </>
    )
}
export default ProductDetail