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

const RestaurantCard = (props) => {
  const { name, cuisine, img } = props?.data
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-img"
        src={img}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>5.0/5.0</h4>
      <h4>3.0 km</h4>
    </div>
  );
};

const restaurantList = [
  {
    id: "random1",
    name: "Pondok Daun",
    cuisine: "Indonesian, Non-Spicy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8nfimdarqId_8uxMv0k2RYgvurn15yQF7Q&s"
  },
  {
    id: "random2",
    name: "18th Street Hot Pot",
    cuisine: "Chinese, Spicy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO5N1DzuW56B9xqxXRpSEZSfEwXZizCx8mg&s"
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurants-container">
        {restaurantList.map((res, idx) => (
          <RestaurantCard key={res.id} data={res} />
        ))}
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