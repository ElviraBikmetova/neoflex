import { FC } from "react"
import { IProductsItem } from "../../interfaces/IProducts"
import { ECard } from "../../enums/cards"
import ProductCard from "./ProductCard"
import s from './style.module.scss'

interface ProductsSectionProps {
    products: IProductsItem
}

const ProductsSection: FC<ProductsSectionProps> = ({ products }) => {
    return (
        <div className={s.productsSection}>
            <div className={s.productsSection__title}>{products.title}</div>
            <div className={s.productsSection__products}>
                {products.items.map(product => <ProductCard key={product.id} product={product} destination={ECard.ForHome} />)}
            </div>
        </div>
    )
}

export default ProductsSection
