import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
  const [listOfRestData, setListOfRestData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetchData();
  }, [])


  //Whenever state variable update, react triggers the reconciliation cycle/algorithm(re-renders the component) 
  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4914883&lng=73.82172899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    console.log(json)
    setListOfRestData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  console.log(listOfRestData)
  const handleTopRestaurants = () => {
    const topRest = listOfRestData.filter((restaurant) => {
      return restaurant?.info.avgRating > 4
    })
    setFilteredRestaurant(topRest)
  }

  const searchRest = () => {
    const filteredRestaurant = listOfRestData.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredRestaurant(filteredRestaurant)
  }
  console.log(searchText)
  return listOfRestData?.length === 0 ? <Shimmer />
    : (
      <div className="body">
        <div className="searchBar">
          <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button name="search" onClick={searchRest}>Search</button>
        </div>
        <button onClick={handleTopRestaurants}>Top Restaurants</button>
        <div className="restContainer">
          {filteredRestaurant?.map((restaurant) => (
            <div className="res-card">
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="link"><RestaurantCard resData={restaurant} /></Link>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Body