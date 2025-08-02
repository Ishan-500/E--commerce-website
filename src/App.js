import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetailPage from './pages/ProductDetailPage';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;