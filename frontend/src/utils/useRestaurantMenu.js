import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/api/restaurants/menu/${resId}`);
    const data = await response.json();

    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;