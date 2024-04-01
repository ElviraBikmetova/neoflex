import ProductsSection from "../components/products/ProductsSection"
import { products } from "../mock/products"


const HomePage = () => {
    return (
        <div>
            {Object.values(products).map(product => <ProductsSection key={product.title} products={product} />)}
        </div>
    )
}

export default HomePage
