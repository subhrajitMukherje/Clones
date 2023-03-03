import React from 'react';
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <img className="header_logo" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Frestaurantindia.s3.ap-south-1.amazonaws.com%2Fs3fs-public%2F2020-11%2Famazon.jpg&imgrefurl=https%3A%2F%2Frestaurant.indianretailer.com%2Fnews%2Famazon-starts-online-food-delivery-at-select-locations-in-delhi-bengaluru.n19530&tbnid=qtVJw2Pz5HtlnM&vet=12ahUKEwiw1by2tcD9AhUnJbcAHYImBnMQMygDegUIARDjAQ..i&docid=PIEA8Hv8nhvYlM&w=583&h=360&q=amazon&ved=2ahUKEwiw1by2tcD9AhUnJbcAHYImBnMQMygDegUIARDjAQ"/> 

      <div className="header_search">
        <input className="header_searchInput" type="text"/>
      </div>
      <div className="header_nav"></div>
    </div>
  )
}

export default Header
