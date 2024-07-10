import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name:"cart",

    initialState:[],

    reducers: {
        addItemToCart:(state, action)=>{
            return [...state, {productId:action.payload.productId, quantity: action.payload.quantity}]
        },

        removeItemFromCart:(state, action)=>{
            return state.filter( item => item.productId!=action.payload.productId)
        },

        incrementItemInCart:(state, action)=>{
            return state.map( item => item.productId!=action.payload.productId? item : {...item, quantity: item.quantity+1})
        },

        decrementItemInCart:(state, action)=>{
            return state.map( item => item.productId!=action.payload.productId?
                item : {...item, quantity:item.quantity-1}
            )
            .filter(item => item.quantity!=0);
        }
    }
})

export const {addItemToCart, removeItemFromCart, incrementItemInCart, decrementItemInCart} = slice.actions;
export default slice.reducer;
