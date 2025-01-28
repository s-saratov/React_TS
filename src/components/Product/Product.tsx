import { ProductCardWrapper, ProductImage, ProductName } from "./styles";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice, productImg }: ProductProps) {
  return (
    <ProductCardWrapper>
      {productImg !== undefined && <ProductImage src={productImg} alt="Product image" />}
      <ProductName>{productName}</ProductName>
      {productPrice !== undefined && <div>Price: {productPrice} Euro</div>}
    </ProductCardWrapper>
  );
}

export default Product;