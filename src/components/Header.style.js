import styled from 'styled-components';

export const Logo = styled.h1`
font-family: 'Agbalumo', sans-serif;
font-size: 25px;
font-weight: 400;
@media (max-width: 768px) {
margin-left: 20%;
    }
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0 50px;
background: #FFDED6;
@media (max-width: 768px) {
   flex-wrap: wrap;
   padding: 10px;
   overflow-x: hidden;
    }
`

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
gap: 20px;
@media (max-width: 768px) {
     margin-left: 2%;
  }
`

export const ListItem = styled.li`
font-size: 20px;
cursor: pointer;
`
export const Link = styled.a`
text-decoration: none;
color: #000;
`