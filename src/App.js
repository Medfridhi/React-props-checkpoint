import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Product from "./components/productTable/ProductTable";
const products = [
  { name: "phone",category: "Samsung",price: 540 },
  { name: "iphone",category: "Apple",price: 800 },
  { name: "television",category: "Sony",price: 950 },
];
function App() {
  return (
    <div className="App">
      {
        products.map(product=><Product name={product.name} category={product.category} price= {product.price} />)
      }
    </div>
  );
}

export default App;
