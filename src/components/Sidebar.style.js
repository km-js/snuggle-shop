import styled from 'styled-components';

export const SidebarContainer = styled.div`
display: flex;
flex-direction: column;
width: 20%;
background-color: #fff;
margin-top: 20px;
border-right: 1px solid #333;
@media (max-width: 768px) {
   flex-direction: row;
   border: 0;
   flex-wrap: wrap;
  }
`

export const FilterContainer = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
@media (max-width: 768px) {
display: none;
  }
`

export const Row = styled.div`
display: flex;
gap: 5px;
`

export const Radio = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #333; 
  border-radius: 50%; 
  outline: none;

  &[type="radio"]:checked {
  background-color: #FFDED6; 
  border: 2px solid #333; 
}
`

export const Label = styled.label`
`

