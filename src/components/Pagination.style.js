import styled from 'styled-components';

export const PaginationContainer = styled.div`
display: flex;
justify-content: center;
margin: 20px 0;
`

export const PageNumber = styled.span`
  cursor: pointer;
  padding: 5px 20px;
  border: 1px solid #ccc;
  margin: 0 50px;
  border-radius: 4px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  background-color: ${(props) => (props.active ? '#333' : 'transparent')};
  font-size: 30px;
  @media (max-width: 768px) {
font-size: 12px;
margin: 5px;
    }
`;