import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
import { MENU_DATA } from "../utils/mockData";

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
      setRestInfo(MENU_DATA);
    }
  };
  return restInfo;
};

export default useRestaurantMenu;
