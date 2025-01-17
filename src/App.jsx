import { useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommend/Recommended'
import Sidebar from './Sidebar/Sidebar'

// DataBase importing
import products from './db/datea'  
import Card from './Components/Card'

function App() {

  const[selectedCategory,setSelectedCatogery] = useState(null)
  const[query,setQuery] = useState("")
  // -----------Input filter -----------

  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product)=>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==
   -1);

  // -------------radio filter-------------
  const handlechange = event=>{
    setSelectedCatogery(event.target.value)
  }
// ---------------button filter-------------
const handleClick = event=>{
  setSelectedCatogery(event.target.value)
}

function filteredData(products,selected,query){
  let filteredProducts = products

  // inputs filtering

  if(query){
    filteredProducts = filteredItems
  }

  // seclected filter (Radio)
  if(selected){
    filteredProducts = filteredProducts.filter(
      ({category,color,company,newPrice,title})=>
      category===selected||
      color===selected||
      company===selected||
      newPrice===selected||
      title===selected)
  }
  return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(

    <Card key={Math.random()}
    img={img}
    title={title}
    star = {star}
    reviews= {reviews}
    newPrice = {newPrice}
    prevPrice= {prevPrice}
    />

  ));


}

  const result = filteredData(products,selectedCategory,query);
  return (
    <>
      <Sidebar handleChange={handlechange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  )
}

export default App
