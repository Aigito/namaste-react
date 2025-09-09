import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/1000x1000/58/58/food-logo-icon-restaurant-menu-vector-23845858.webp"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8nfimdarqId_8uxMv0k2RYgvurn15yQF7Q&s"
      />
      <h3>Pondok Daun</h3>
      <h4>Indonesian, Spicy</h4>
      <h4>5.0/5.0</h4>
      <h4>3.0 km</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurants-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);