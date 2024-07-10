
import { addItemToCart, removeItemFromCart, incrementItemInCart, decrementItemInCart } from "./store/cartStore/reducer";
import {addItemToWishlist, removeItemFromWishlist} from './store/wishlistStore/reducer'
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const state = useSelector(state=>state)
  const dispatch = useDispatch();
  dispatch(addItemToCart({productId:1, quantity:1}));
  dispatch(addItemToCart({productId:2, quantity:1}));
  dispatch(addItemToWishlist({productId:1}));
  dispatch(addItemToWishlist({productId:2}));

  return (
    <>
      <div>
        <h1>Redux Cart App</h1>
      </div>
    </>
  )
}

export default App
