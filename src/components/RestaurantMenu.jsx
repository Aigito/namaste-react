import { useEffect, useState } from "react";
import mockRestaurantMenuData from "../utils/mockRestaurantMenu.json" assert { type: "json" };
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setResInfo(mockRestaurantMenuData);
  };

  if (resInfo === null) return <Shimmer count={6} />;

  const { itemCards } = resInfo?.card?.card;

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;