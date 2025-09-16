import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setRestInfo(json);
  };
    fetchData();
  }, []);

  

  return restInfo;
};

export default useRestaurantMenu;
