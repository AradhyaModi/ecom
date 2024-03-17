import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './cartSlice';
 
// Sample data for products
const products = [
  { id: 1, img:"https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name: 'Product 1', category: 'Category A', price: 10 },
  { id: 2, img:"https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name: 'Product 2', category: 'Category B', price: 20 },
  { id: 3, img:"https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,name: 'Product 3', category: 'Category A', price: 15 },  
];

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams({q:"",category:""});
  const q = searchParams.get("q")
  const category = searchParams.get("category")
  console.log(q);
  const dispatch = useDispatch();
  //const [searchTerm, setSearchTerm] = useState('');

  const cartData = useSelector((data) => data.cart)


  console.log("cartdata is ---", cartData)

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const filteredProducts = products.filter(product =>
  //  product.name.toLowerCase().includes(q.toLowerCase())

    (product.name.toLowerCase().includes(q.toLowerCase())) &&
      (category === 'All' || product.category === category)
  );


  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={q}
        onChange={(e) => 
          setSearchParams(prev =>{
            prev.set("q",e.target.value)
            return prev
          })
          }
      />
      <select
        value={category}
        onChange={(e) => setSearchParams(prev =>{
          prev.set("category",e.target.value)
          return prev
        })}
      >
        <option value="All">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        {/* Add more categories dynamically if needed */}
      </select>
      <div>
        {filteredProducts.map(product => (  
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.img} height={100} width={100}></img>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default App;