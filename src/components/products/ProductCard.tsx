import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { IProductCard } from '../../interfaces/IProducts'
import { formatPrice } from '../../helpers/formatPrice'
import { ECard } from '../../enums/cards'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addProduct, deleteProduct, products } from '../../store/cartSlice'
import { ERoutes } from '../../enums/routes'
import Counter from '../counter/Counter'
import s from './style.module.scss'

interface ProductCardProps {
    product: IProductCard,
    destination: string
}

const ProductCard: FC<ProductCardProps> = ({ product, destination }) => {
    const productsInCart = useAppSelector(products)
    const productsInCartCount = productsInCart.filter(item => item.id === product.id)[0]?.count
    const isInCart = productsInCart.some(item => item.id === product.id)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const totalPrice = formatPrice(product.price * (productsInCartCount || 0))

    const addToCart = () => {
        if (isInCart) {
            navigate(ERoutes.Cart)
        } else {
            dispatch(addProduct({ ...product, count: 1 }))
        }
    }

    const deleteFromCart = () => {
        dispatch(deleteProduct(product))
    }

    return (
        <div className={s[destination]}>
            <div className={s[destination + '__top']}>
                <div className={s[destination + '__content']}>
                    <div className={s[destination + '__img']}>
                        <img src={ERoutes.Root + product.img} alt={product.title} />
                    </div>
                    <div className={s[destination + '__info']}>
                        <div className={s[destination + '__row']}>
                            <div className={s[destination + '__title']}>{product.title}</div>
                            <div>
                                <div className={s[destination + '__price']}>{formatPrice(product.price)}</div>
                                {destination === ECard.ForHome &&
                                <div className={s[ECard.ForHome + '__oldPrice']}>
                                    {product.oldPrice && formatPrice(product.oldPrice)}
                                </div>}
                            </div>
                        </div>
                        {destination === ECard.ForHome &&
                        <div className={s[ECard.ForHome + '__row']}>
                            <div className={s[ECard.ForHome + '__rating']}>
                                <div className={clsx('icon-star', s[ECard.ForHome + '__iconStar'])} />
                                <div>{product.rate}</div>
                            </div>
                            <button className={s[ECard.ForHome + '__buy']} onClick={addToCart}>
                                {isInCart ? 'В корзину' : 'Купить'}
                            </button>
                        </div>}
                    </div>
                </div>
                {destination === ECard.ForCart &&
                <div>
                    <button
                        className={clsx('icon-delete', s[ECard.ForCart + '__iconDelete'])}
                        onClick={deleteFromCart}
                    />
                </div>}
            </div>
            {destination === ECard.ForCart &&
            <div className={s[ECard.ForCart + '__bottom']}>
                <Counter className={s[ECard.ForCart + '__counter']} product={product} />
                <div className={s[ECard.ForCart + '__totalPrice']}>{totalPrice}</div>
            </div>}
        </div>
    )
}

export default ProductCard
