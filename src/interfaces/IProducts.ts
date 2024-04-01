export interface IProductCard {
    img: string
    title: string
    price: number
    oldPrice?: number
    rate: number
}

export interface IProductsItem {
    title: string
    items: IProductCard[]
}

export interface IProducts {
    headphones: IProductsItem
    wirelessHeadphones: IProductsItem
}