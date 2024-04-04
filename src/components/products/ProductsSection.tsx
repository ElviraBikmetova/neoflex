import { FC } from "react"
import { v4 as uuidv4 } from 'uuid';
import { IProductsItem } from "../../interfaces/IProducts"
import s from './style.module.scss'
import ProductCard from "./ProductCard"
import { ECard } from "../../enums/cards";

interface ProductsSectionProps {
    products: IProductsItem
}

const ProductsSection: FC<ProductsSectionProps> = ({ products }) => {
    return (
        <div className={s.productsSection}>
            <div className={s.productsSection__title}>{products.title}</div>
            <div className={s.productsSection__products}>
                {products.items.map(product => <ProductCard key={uuidv4()} product={product} destination={ECard.ForHome} />)}
            </div>
        </div>
    )
}

export default ProductsSection
