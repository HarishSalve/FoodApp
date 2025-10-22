import RestaurantCard, { withNewOnboardLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantCards from "../utils/useRestaurantCards";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const Body = () => {
  const {
    listOfRestData,
    filteredRestaurant,
    searchText,
    handleTopRestaurants,
    handleSearch,
    setSearchText,
  } = useRestaurantCards();

  const isOnline = useOnlineStatus();

  const RestaurantCardWithNewLabel = withNewOnboardLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline, Please check your internet connection!!
      </h1>
    );
  }

  if (!listOfRestData?.length) {
    return <Shimmer />;
  }

  return (
    <div className="flex p-2.5 m-2.5 justify-center flex-col items-center">
      <div className="flex">
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search here..."
          className="border rounded-md p-1 h-[30px] mr-2 border-grey-300"
        />
        <button
          onClick={handleSearch}
          className="flex items-center cursor-pointer justify-center border rounded-md p-1 h-[30px] w-[90px] bg-pink-300 mr-4 text-white "
        >
          Search
        </button>
        <button
          onClick={handleTopRestaurants}
          className="flex items-center cursor-pointer justify-center border rounded-md p-1 h-[30px] w-[170px] bg-pink-300 mr-4 text-white "
        >
          Top Restaurants
        </button>
        <label>User Name:</label>
        <input
          className="border rounded-md p-1 h-[30px] mr-2 border-grey-300"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2.5 m-2.5">
        {filteredRestaurant?.map((restaurant) => (
          <div key={restaurant.info.id}>
            <Link to={"/restaurant/" + restaurant.info.id} className="link">
              {restaurant?.info?.isNewlyOnboarded ? (
                <RestaurantCardWithNewLabel resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
