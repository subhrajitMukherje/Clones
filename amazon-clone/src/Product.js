import React from 'react'
import "./Product.css";
function Product() {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>The Blue Umbrella – Ruskin Bond</p>
        <p className='product_price'>
            <small>₹</small>
            <strong>100</strong>
        </p>
        <div className='product_rating'>
         <p>⭐</p>
        </div>
      </div>
    <img src='https://www.haritbooks.com/wp-content/uploads/2022/10/ruskin-bond-the-blue-umbrella.jpg' alt=''/>
    <button>Add to Basket</button>
    </div>
  );
}

export default Product
