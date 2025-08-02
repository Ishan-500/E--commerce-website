import React from 'react'
import ProductList from '../components/ProductList'

const Home = ({onAddToCart, searchTerm}) => {
  return (
    <div>
      <ProductList onAddToCart={onAddToCart} searchTerm={searchTerm}></ProductList>
    </div>
  );
};

export default Home
