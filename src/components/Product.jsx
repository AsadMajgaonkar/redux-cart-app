import { useDispatch } from "react-redux"
import { addItemToCart } from "../store/cartStore/reducer";

export default function Product(props) {
    
    const dispatch = useDispatch();
    const { id, title, rating:{rate}, price, image:imageURL } = props.item;

    function addToCart(){
      dispatch(addItemToCart({
        productId:id,
        title,
        rate,
        price,
        imageURL
      }))
    }
    
    return (
      <div className="product">
        <div className="product-image">
          <img src={imageURL} alt={title} />
        </div>
        <div className="title-container">
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
        <div className="price-rating-container">
          <p className="rating">{rate} ★ ★ ★ ★</p>
          <p className="price">{price}</p>
        </div>
        <div className="cta-container">
          <button onClick={addToCart}>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    )
  }