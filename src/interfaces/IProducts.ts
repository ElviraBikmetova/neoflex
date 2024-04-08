export interface IProductCard {
    id: string
    img: string
    title: string
    price: number
    oldPrice?: number
    rate: number
    count?: number
}

export interface IProductCardinCart extends IProductCard {
    count: number
}

export interface IProductsItem {
    title: string
    items: IProductCard[]
}

export interface IProducts {
    headphones: IProductsItem
    wirelessHeadphones: IProductsItem
}