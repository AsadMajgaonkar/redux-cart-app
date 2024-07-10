import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name:"wishlist",

    initialState:[],

    reducers: {
        addItemToWishlist:(state, action)=>{
            return [...state, action.payload.productId]
        },

        removeItemFromWishlist:(state, action)=>{
            return state.filter( id => id!=action.payload.productId)
        },
    }
})

export const {addItemToWishlist, removeItemFromWishlist} = slice.actions;
export default slice.reducer;
