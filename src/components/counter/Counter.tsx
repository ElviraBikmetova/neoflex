
import { FC } from 'react'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IProductCard } from '../../interfaces/IProducts'
import { incrementCounter, decrementCounter, deleteProduct, products } from '../../store/cartSlice'
import s from './style.module.scss'

interface CounterProps {
    className?: string
    product: IProductCard
}

const Counter: FC<CounterProps> = ({ className, product }) => {
    const dispatch = useAppDispatch()
    const productsInCart = useAppSelector(products)
    const productsInCartCount = productsInCart.filter(item => item.id === product.id)[0]?.count

    const increment = () => {
        dispatch(incrementCounter(product.id))
    }

    const decrement = () => {
        if (productsInCartCount) {
            dispatch(decrementCounter(product.id))
        }
        if (productsInCartCount === 1) {
            dispatch(deleteProduct(product))
        }
    }

    return (
        <div className={clsx(className, s.counter)}>
            <button className={s.counter__minus} onClick={decrement} disabled={product.count === 0}/>
            <div>{product.count}</div>
            <button className={s.counter__plus} onClick={increment} />
        </div>
    )
}

export default Counter
