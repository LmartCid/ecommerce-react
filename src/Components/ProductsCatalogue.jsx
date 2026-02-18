import ProductCardCatalogue from "./CatalogueProductCard"

function ProductsCatalogue({ productList }) {
    return (
        <div className="list-of-products-container flex gap-4 justify-center bg-gray-100">
            {
                productList.map((product) => (
                    <ProductCardCatalogue product={product} key={product.id} />
                ))
            }
        </div>

    )
}
export default ProductsCatalogue