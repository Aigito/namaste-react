import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(res => res.rating > 4);
          setListOfRestaurants(filteredList);
        }}>
        Top Rated Restaurants
      </button>
      <div className="restaurants-container">
        {listOfRestaurants.map((res, idx) => (
          <RestaurantCard key={res.id} data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;