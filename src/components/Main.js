import { MainContainer, MainTitle, Products, ProductCard, ProductImage, ProductCategory, ProductTitle, ProductDescription, ProductPrice } from "./Main.style"


function Main({ products }) {
  return (
    <MainContainer>
      <MainTitle>Products</MainTitle>
      <Products id="Products">
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.images[0]} />
            <ProductCategory>{product.category}</ProductCategory>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>₹{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </Products>
    </MainContainer>
  )
}

export default Main