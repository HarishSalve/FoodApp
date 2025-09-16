import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL } from "./constants";

const useRestaurantCards = () => {
  const [listOfRestData, setListOfRestData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //Whenever state variable update, react triggers the reconciliation cycle/algorithm(re-renders the component)
  const fetchData = async () => {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();
    setListOfRestData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleTopRestaurants = () => {
    const topRest = listOfRestData.filter((restaurant) => {
      return restaurant?.info.avgRating >= 4.5;
    });
    setFilteredRestaurant(topRest);
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestData.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurant(filteredRestaurant);
  };

  return {
    listOfRestData,
    filteredRestaurant,
    searchText,
    handleTopRestaurants,
    handleSearch,
    setSearchText
  };
};

export default useRestaurantCards;
