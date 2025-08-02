import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, onRemoveFromCart}) => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
   <div className="cart">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
        <p>Your cart is empty.</p>
    ) : (
        <div>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                   <img src={item.image} alt={item.title} />
                   <div>
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <button className="btn btn-danger" onClick={() => onRemoveFromCart(item)}>Remove</button>
                   </div>
                    
                </div>
            ))}
            <h3> Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    )}
    <Link to="/" className="btn btn-secondary" style={{marginTop: '20px', display: 'inline-block'}}>← Back to Home</Link>
   </div>
  );
};

export default Cart
