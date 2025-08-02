import React from 'react';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = ({onAddToCart}) => {
  return (
    <div>
      <ProductDetail onAddToCart={onAddToCart}/>    
    </div>
  )
}

export default ProductDetailPage
