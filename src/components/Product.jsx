export default function Product(props) {
    const { title, rating, price, image:imageUrl } = props.item
    return (
      <div className="product">
        <div className="product-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="title-container">
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
        <div className="price-rating-container">
          <p className="rating">{+rating.rate} ★ ★ ★ ★</p>
          <p className="price">{price}</p>
        </div>
        <div className="cta-container">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    )
  }