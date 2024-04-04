import { v4 as uuidv4 } from 'uuid';
import ProductCard from "../../components/products/ProductCard"
import { ECard } from "../../enums/cards"
import { useAppSelector } from "../../hooks/redux"
import { cart, products } from "../../store/cartSlice"


const CartPage = () => {
    const productsInCart = useAppSelector(products)

    return (
        <>
            <div>Корзина</div>
            <div>
                {productsInCart.map(product => <ProductCard key={uuidv4()} product={product} destination={ECard.ForCart} />)}
                <div></div>
            </div>
        </>
    )
}

export default CartPage
