import { combineReducers } from "redux";
import cartReducer from "./cartStore/reducer"
import productReducer from "./productStore/reducer"
import wishlistReducer from "./wishlistStore/reducer"

export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
})