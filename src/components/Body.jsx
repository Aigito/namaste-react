import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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

  let cards;
  if (listOfRestaurants.length === 0) {
    cards = <Shimmer count={6} />
  } else {
    cards = listOfRestaurants.map((res) => (
      <RestaurantCard key={res.info.id} data={res.info} />
    ))
  }

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
      {listOfRestaurants &&
        <div className="restaurants-container">
          {cards}
        </div>
      }
    </div>
  );
};

export default Body;