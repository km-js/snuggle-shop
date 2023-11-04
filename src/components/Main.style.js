import styled from 'styled-components';

export const Container = styled.div`
display: flex;
@media (max-width: 768px) {
   flex-direction: column;
  }
`

export const MainTitle = styled.h1`
font-size: 30px;
font-weight: 500;
padding: 10px 50px;
@media (max-width: 768px) {
font-size: 20px;
padding: 5px;
}
`

export const Products = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
flex-wrap: wrap;
padding: 20px;
`

export const MainContainer = styled.div`
`

export const MainSection = styled.div`
width: 80%;
@media (max-width: 768px) {
    margin-left: 10%;
}
`

export const ProductCard = styled.div`
width: 230px;
height: 400px;
 border-radius: 5px;
border: 0.5px solid gray;
padding: 20px;
cursor: pointer;

&:hover{
    background: #FFDED6;
    transform: scale(1.05);
}
`

export const ProductImage = styled.img`
width: 230px;
height: 200px;
border-radius: 10px;
`

export const ProductCategory = styled.p`
font-size: 15px;
color: gray;
font-weight: 300;
`

export const ProductTitle = styled.p`
font-size: 17px;
font-weight: 600;
`

export const ProductDescription = styled.p`
font-size: 12px;
font-weight: 400;
`
export const ProductPrice = styled.p`
font-size: 15px;
font-weight: 500;
`