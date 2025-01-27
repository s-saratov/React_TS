import "./styles.css";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice, productImg }: ProductProps) {
  return (
    <div className="product-card-wrapper">
      {productImg !== undefined && <img src={productImg} className="product-img" alt="Product image" />}
      <h3>{productName}</h3>
      {productPrice !== undefined && <div>Price: {productPrice} Euro</div>}
    </div>
  );
}

export default Product;