import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = restaurantList

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          listOfRestaurants = listOfRestaurants.filter(res => res.rating > 4)
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