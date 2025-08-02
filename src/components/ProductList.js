import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ onAddToCart, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      updatedProducts = updatedProducts.filter(product => product.category === category);
    }

    if (sort === 'lowToHigh') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'highToLow') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [products, searchTerm, category, sort]);

  const categories = [...new Set(products.map(product => product.category))];

  return (
   <div className="product-list-container">
    <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">All Categories</option>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>

        </select>
    </div>
    <div className="product-grid">
        {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
    </div>
   </div>
  );
};

export default ProductList;