import { v4 as uuidv4 } from 'uuid';
import ProductCard from "../../components/products/ProductCard"
import { ECard } from "../../enums/cards"
import { useAppSelector } from "../../hooks/redux"
import { cart, products } from "../../store/cartSlice"
import { useEffect, useState } from 'react';
import { IProductCard } from '../../interfaces/IProducts';
import s from './style.module.scss'
import { formatPrice } from '../../helpers/formatPrice';


const CartPage = () => {
    const productsInCart = useAppSelector(products)
    const sumTotal: number = productsInCart.reduce((acc, curr) => acc + (curr.count || 0) * curr.price, 0)

    useEffect(() => {
        sessionStorage.setItem('products', JSON.stringify(productsInCart))
    }, [productsInCart])

    return (
        <>
            <div className={s.cartPage__title}>Корзина</div>
            <div className={s.cartPage__content}>
                <div className={s.cartPage__cards}>
                    {productsInCart.map((product: IProductCard) => <ProductCard key={product.id} product={product} destination={ECard.ForCart} />)}
                </div>
                <div className={s.checkout}>
                    <div className={s.checkout__total}>
                        <div>ИТОГО</div>
                        <div>{formatPrice(sumTotal)}</div>
                    </div>
                    <button className={s.checkout__btn}>Перейти к оформлению</button>
                </div>
            </div>

        </>
    )
}

export default CartPage
