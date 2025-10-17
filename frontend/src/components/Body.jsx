import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MOCK_SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MOCK_SWIGGY_URL);

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
            // Note: We can make the id param dynamic but because Swiggy no longer provides public API
            // we can only mock the data and it shows the same menu for all the restaurants
            <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
              <RestaurantCard data={res.info} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;