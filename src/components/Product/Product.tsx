import { ProductCardWrapper, ProductImage } from "./styles";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice, productImg }: ProductProps) {
  return (
    <ProductCardWrapper>
      {productImg !== undefined && <ProductImage src={productImg} alt="Product image" />}
      <h3>{productName}</h3>
      {productPrice !== undefined && <div>Price: {productPrice} Euro</div>}
    </ProductCardWrapper>
  );
}

export default Product;