import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=425&catalog_qa=undefined&submitAction=ENTER";
    const res = await fetch("https://corsproxy.io/?url=" + url);
    console.log(res.ok, res.status);
    const text = await res.text();
    console.log(text)
  };

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h1>Menu</h1>
      <ul>
        <li>Burger</li>
        <li>Fried Rice</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;