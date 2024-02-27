import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.data.push(action.payload)
        },
        removeCart: (state, action) => {
            state.data = state.data.filter(product => product.id !== action.payload)
        }
    }
})
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;