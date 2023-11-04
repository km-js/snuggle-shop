import { SidebarContainer, FilterContainer, Row, Label, Radio, } from './Sidebar.style';

const categories = ["All", "Smartphones", "Laptops", "Fragrances", "Skincare"]
const prices = ["0-99", "100-499", "500-999", "1000-1999"]
const sortBy = ["Lowest price", "Highest price", "Highest rating"]

function Sidebar({ onCategoryClick, onPriceClick, sortProducts }) {

  return (
    <SidebarContainer id="Categories">
      <FilterContainer>
        Category
        {categories.map((category, index) => (
          <Row>
            <Radio key={index} type="radio" name="category" value={category} onClick={onCategoryClick}></Radio><Label>{category}</Label>
          </Row>
        ))}
      </FilterContainer>

      <FilterContainer>
        Price
        {prices.map((price, index) => (
          <Row>
            <Radio key={index} type="radio" name="price" value={price} onClick={onPriceClick}></Radio>
            <Label>{price}</Label>
          </Row>
        ))}
      </FilterContainer>

      <FilterContainer>
        Sort By
        {sortBy.map((value, index) => (
          <Row>
            <Radio key={index} type="radio" name="price" value={value} onClick={sortProducts}></Radio>
            <Label>{value}</Label>
          </Row>
        ))}
      </FilterContainer>

    </SidebarContainer>
  )
}

export default Sidebar