import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer count={6} />;

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h1>Menu</h1>
      <ul>
        {resInfo.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;