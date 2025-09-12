import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

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

export default Body;