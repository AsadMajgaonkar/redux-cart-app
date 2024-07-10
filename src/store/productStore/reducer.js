import { createSlice } from '@reduxjs/toolkit';
import products from './../productsList';

const slice = createSlice({
    name:"products",

    initialState:products,

    reducers: {}
})

export default slice.reducer;
