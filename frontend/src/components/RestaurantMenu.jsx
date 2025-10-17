import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch("http://localhost:5000/api/restaurants");
    const data = await response.json();

    console.log(data);
  };

  if (resInfo === null) return <Shimmer count={6} />;

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h1>Menu</h1>
      <ul>
        {/* {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price}</li>)} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;