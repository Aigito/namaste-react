import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://pastebin.com/raw/0QcdEDBL");

    const json = await data.json();

    const restaurants = json?.data?.cards["1"]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  return listOfRestaurants.length === 0 ?
    <Shimmer count={6} /> :
    (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)
              }
            />
            <button
              onClick={() => {
                const filteredList = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                setFilteredListOfRestaurants(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
              setFilteredListOfRestaurants(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="restaurants-container">
          {filteredListOfRestaurants.map((res) => (
            <RestaurantCard key={res.info.id} data={res.info} />
          ))}
        </div>
      </div>
    );
};

export default Body;