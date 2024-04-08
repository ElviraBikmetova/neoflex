import ProductsSection from "../components/products/ProductsSection"
import { products } from "../data/mock/products"


const HomePage = () => {
    return (
        <>
            {Object.values(products).map(product => <ProductsSection key={product.title} products={product} />)}
        </>
    )
}

export default HomePage
