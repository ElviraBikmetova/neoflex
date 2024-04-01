import { FC } from 'react'
import clsx from 'clsx'
import { IProductCard } from '../../interfaces/IProducts'
import s from './style.module.scss'
import { formatPrice } from '../../helpers/formatPrice'


interface ProductCardProps {
    product: IProductCard
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={s.productCard}>
            <div className={s.productCard__img}>
                <img src={product.img} alt='product' />
            </div>
            <div className={s.productCard__info}>
                <div className={s.productCard__row}>
                    <div className={s.productCard__title}>{product.title}</div>
                    <div>
                        <div className={s.productCard__price}>{formatPrice(product.price)}</div>
                        <div className={s.productCard__oldPrice}>{product.oldPrice && formatPrice(product.oldPrice)}</div>
                    </div>
                </div>
                <div className={s.productCard__row}>
                    <div className={s.productCard__rating}>
                        <div className={clsx('icon-star', s.productCard__iconStar)} />
                        <div>{product.rate}</div>
                    </div>
                    <div className={s.productCard__buy}>Купить</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
