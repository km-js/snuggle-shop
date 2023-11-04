import styled from 'styled-components';

export const HeroContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

export const HeroContent = styled.p`
text-align: right;
padding: 50px;
width: 40%;
@media (max-width: 768px) {
    text-align: left;
    }
`
export const HeroTitle = styled.h1`
font-size: 60px;
font-weight: 900;
margin-top: 20%;
color: #F5ADAE;
@media (max-width: 768px) {
    font-size: 30px;
    margin-top: -30px;
  }
`

export const HeroDescription = styled.p`
font-size: 20px;
font-weight: 500;
margin-top: -30px;
@media (max-width: 768px) {
    font-size: 15px;
    margin-top: 0;
  }
`

export const HeroImage = styled.img`
height: 600px;
width: 50%;
margin-left: 20px;
@media (max-width: 768px) {
   width: 300px;
   height: 300px;
  }

`
export const HeroButton = styled.button`
background: #F5ADAE;
border-radius: 10px;
padding: 10px;
outline: 0;
border: 0;
font-size: 25px;
cursor: pointer;
`

export const HeroLink = styled.a`
text-decoration: none;
color: #fff;
`
