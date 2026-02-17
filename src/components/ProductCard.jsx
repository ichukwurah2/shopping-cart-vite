import "../styles/ProductCard.css";

const ProductCard = ({ name, price, addToCart, viewDetails }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>

      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={viewDetails}>View Details</button>
    </div>
  );
};

export default ProductCard;
