import { useState } from "react";
import "../styles/Home.css";
import ProductCard from "../components/ProductCard";

const products = [
  { name: "Product 1", price: 10, description: "Details about Product 1." },
  { name: "Product 2", price: 20, description: "Details about Product 2." },
  { name: "Product 3", price: 30, description: "Details about Product 3." },
];

const Home = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // "Product Details page"
  if (selectedProduct) {
    return (
      <div className="home">
        <h2>Product Details</h2>
        <h3>{selectedProduct.name}</h3>
        <p>Price: ${selectedProduct.price}</p>
        <p>{selectedProduct.description}</p>

        {/* This MUST increment the same cart */}
        <button onClick={addToCart}>Add to Cart</button>

        <button onClick={() => setSelectedProduct(null)} style={{ marginLeft: "10px" }}>
          Back
        </button>
      </div>
    );
  }

  // Product list
  return (
    <div className="home">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          addToCart={addToCart}
          viewDetails={() => setSelectedProduct(product)}
        />
      ))}
    </div>
  );
};

export default Home;
