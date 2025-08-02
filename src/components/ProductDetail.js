import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';

const ProductDetail = ({onAddToCart}) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
          .then(response => {
            setProduct(response.data);
          })
          .catch(error => {
            console.error('Error fetching product:', error);
          });
      }, [id]);

      if (!product) {
        return <div>Loading...</div>;
      }

  return (
    <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
       
            <button className = "btn btn-primary" onClick={() => onAddToCart(product)}>Add to Cart</button>
        
    </div>
    </div>
  );
}

export default ProductDetail
