import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProductCard } from "../interfaces/IProducts"
import { RootState } from "./store"

interface ICartState {
    products: IProductCard[]
}

const initialState: ICartState = {
    products: [],
}

const authSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProductCard>) {
            state.products.push(action.payload)
        },
        deleteProduct(state, action) {

        },
    }
})

export const { addProduct, deleteProduct } = authSlice.actions
export const cart = (state: RootState) => state.cart
export const products = (state: { cart: ICartState}) => state.cart.products

export default authSlice.reducer