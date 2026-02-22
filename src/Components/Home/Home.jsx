import { Link } from "react-router-dom"
import ProductsCatalogue from "../ProductsCatalogue/ProductsCatalogue" 
import products from "../../products"

function Home() {
    return <ProductsCatalogue productList={products} />    
}

export default Home