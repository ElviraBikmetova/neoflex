import { FC } from 'react'
import clsx from 'clsx'
import { IProductCard } from '../../interfaces/IProducts'
import { formatPrice } from '../../helpers/formatPrice'
import s from './style.module.scss'
import img from '../../assets/images/Apple-BYZ-S8521.png'
import { ECard } from '../../enums/cards'
import { useAppDispatch } from '../../hooks/redux'
import { addProduct } from '../../store/cartSlice'

const pathPart = '/neoflex/' // TODO: разрбраться с путями

interface ProductCardProps {
    product: IProductCard,
    destination: string
}

const ProductCard: FC<ProductCardProps> = ({ product, destination }) => {
    // console.log('product', product)
    const dispatch = useAppDispatch()
    const addToCart = () => {
        dispatch(addProduct(product))
    }

    return (
        <div className={s[destination]}>
            <div className={s[destination + '__top']}>
                <div className={s[destination + '__left']}>
                    <div className={s[destination + '__img']}>
                        <img src={pathPart + product.img} alt={product.title} />
                    </div>
                    <div className={s[destination + '__info']}>
                        <div className={s[destination + '__row']}>
                            <div className={s[destination + '__title']}>{product.title}</div>
                            <div>
                                <div className={s[destination + '__price']}>{formatPrice(product.price)}</div>
                                {destination === ECard.ForHome &&
                                <div className={s[ECard.ForHome + '__oldPrice']}>{product.oldPrice && formatPrice(product.oldPrice)}</div>}
                            </div>
                        </div>
                        {destination === ECard.ForHome &&
                        <div className={s[ECard.ForHome + '__row']}>
                            <div className={s[ECard.ForHome + '__rating']}>
                                <div className={clsx('icon-star', s[ECard.ForHome + '__iconStar'])} />
                                <div>{product.rate}</div>
                            </div>
                            <div className={s[ECard.ForHome + '__buy']} onClick={addToCart}>Купить</div>
                        </div>}
                    </div>
                </div>
                {destination === ECard.ForCart &&
                <div>
                    <button
                        className={clsx('icon-delete', s[ECard.ForCart + '__iconCart'])}
                        onClick={() => 0}
                    />
                </div>}
            </div>
            <div className={s[ECard.ForCart + '__bottom']}>
                <div className={s.counter}>
                    <div className={s.counter__minus}></div>
                    <div>count</div>
                    <div className={s.counter__plus}></div>
                </div>
                <div>total price</div>
            </div>
        </div>
    )
}

export default ProductCard
