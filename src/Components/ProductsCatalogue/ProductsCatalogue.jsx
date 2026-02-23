import ProductCardCatalogue from "../ProductCardCatalogue/ProductCardCatalogue"
import products from "../../products"

function ProductsCatalogue() {
    return (
        <div className="list-of-products-container flex gap-4 justify-center bg-gray-100">
            {
                products.map((product) => (
                    <ProductCardCatalogue product={product} key={product.id} />
                ))
            }
        </div>

    )
}
export default ProductsCatalogue