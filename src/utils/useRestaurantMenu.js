import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();
      setRestInfo(json);
    } catch (error) {
      console.error("Error fetching restaurant menu data:", error);
    }
  };
  return restInfo;
};

export default useRestaurantMenu;
