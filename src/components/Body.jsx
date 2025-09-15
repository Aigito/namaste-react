import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://pastebin.com/raw/0QcdEDBL");

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards["1"]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

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
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} data={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;