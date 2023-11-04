import { useEffect, useState } from 'react';
import './App.css';
import GlobalStyle from './App.style';
import Header from './components/Header';
import Main from './components/Main';
import Hero from './components/Hero';
import Pagination from './components/Pagination';
import Sidebar from './components/Sidebar';
import { Container, MainSection } from './components/Main.style';



function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const productsPerPage = 9;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const displayedProducts = products.slice(startIndex, endIndex)

  const onPageChanges = (page) => {
    setCurrentPage(page)
  }

  const onCategoryClick = (event) => {
    console.log("category clicked");
    console.log(event.target.value);
   if(event.target.value === "All"){
displayAllProducts();
   }
   else{
    let query = event.target.value; 
    fetch(`https://dummyjson.com/products/category/${query}`)
    .then(res => res.json())
    .then(data => 
       {
      console.log("products",data)
      setProducts(data.products)}
      );
  console.log(products)
   }
  }

const onPriceClick = (event) => {

let filterValue = event.target.value;
let filtered;
setIsFilter(true);

  if (filterValue === '0-99') {
    filtered = products.filter((product) => product.price >= 0 && product.price < 100);
  } else if (filterValue === '100-499') {
    filtered = products.filter((product) => product.price >= 100 && product.price <= 499);
  } else if (filterValue === '500-999') {
    filtered = products.filter((product) => product.price >= 500 && product.price <= 999);
  } else if (filterValue === '1000-1999') {
    filtered = products.filter((product) => product.price >= 1000 && product.price <= 1999);
  }
  else {
    // Show all products when no filter is selected
    filtered = products;
  }
console.log("filterd", filtered)
  setFilteredProducts(filtered);
};



  function sortProducts(event) {
    let sortedProducts = products.slice();
     sortedProducts.sort((a, b) => {
      if (event.target.value === 'Lowest price') {
      return a.price - b.price;
      } else if(event.target.value === 'Highest price') {
      return b.price - a.price;
      }
      else if(event.target.value === 'Highest rating'){
        return b.rating - a.rating
      }
      else{
        return 0;
      }
    });
    console.log(sortedProducts)
    setProducts(sortedProducts)
  }

  function displayAllProducts (){
    fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(data =>
     {
     console.log("products",data)
      setProducts(data.products)
    }
    )
  } 

  useEffect(() => {
   displayAllProducts();  
}, [])

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <Sidebar onCategoryClick={onCategoryClick} onPriceClick={onPriceClick} sortProducts={sortProducts} />
        <MainSection>

          <Main products={isFilter ? filteredProducts : displayedProducts} />
          {products.length >10  && <Pagination
            currentPage={currentPage}
            totalPages={4}
            onPageChanges={onPageChanges} />}
                  
                  </MainSection>
      </Container>

    </div>
  );
}

export default App;
