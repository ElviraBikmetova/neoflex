import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProductCardinCart } from "../interfaces/IProducts"
import { RootState } from "./store"

interface ICartState {
    products: IProductCardinCart[]
}

const initialState: ICartState = {
    products: JSON.parse(sessionStorage.getItem('products') as string) || [],
}

const authSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProductCardinCart>) {
            state.products.push(action.payload)
        },
        deleteProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        },
        incrementCounter(state, action: PayloadAction<string>) {
            const productToUpdate = state.products.find(product => product.id === action.payload)

            if (productToUpdate) {
                productToUpdate.count && productToUpdate.count++
            }
        },
        decrementCounter(state, action: PayloadAction<string>) {
            const productToUpdate = state.products.find(product => product.id === action.payload)
            
            if (productToUpdate) {
                productToUpdate.count && productToUpdate.count--
            }
        },
    }
})

export const { addProduct, deleteProduct, incrementCounter, decrementCounter } = authSlice.actions
export const cart = (state: RootState) => state.cart
export const products = (state: { cart: ICartState}) => state.cart.products

export default authSlice.reducer