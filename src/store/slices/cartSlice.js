import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            let obj = {
                count: 1,
                ...action.payload
            }
            state.data.push(obj)
        },
        removeCart: (state, action) => {
            state.data = state.data.filter(product => product.id !== action.payload)
        },
        increment: (state, action) => {
            state.data.forEach(i => {
                if (i.id === action.payload.id) {
                    i.count--
                }
            })
        },
        decrement: (state, action) => {
            state.data.forEach(i => {
                if (i.id === action.payload.id) {
                    i.count++
                }
            })
        }
    }
})
export const { addCart, removeCart , increment , decrement } = cartSlice.actions;
export default cartSlice.reducer;