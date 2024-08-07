import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name:"cart",

    initialState:[],

    reducers: {
        addItemToCart:(state, action)=>{
            let result = state.find(item => item.productId == action.payload.productId);
            
            if(result)
                return state;

            return [...state, {
                productId:action.payload.productId,
                title:action.payload.title,
                rate:action.payload.rate,
                imageURL:action.payload.imageURL,
                price:action.payload.price,
                quantity: 1}]
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
