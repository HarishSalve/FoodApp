import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  if (!restInfo) return <ShimmerMenu />;

  const { name, avgRatingString, cuisines, costForTwoMessage, areaName } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <>
      <div className="m-5 flex flex-col items-center">
        <h2 className="font-bold text-lg">{name}</h2>
        <ul className="p-3 border border-gray-300 w-[800px] my-2.5 rounded-md">
          <li>
            <h3>
              {cuisines.join(", ")} - Rs. {costForTwoMessage}
            </h3>
          </li>
          <li>
            <h3>{areaName}</h3>
          </li>
          <li>
            <h3>Rating - {avgRatingString}</h3>
          </li>
        </ul>
        <h2 className="font-bold">{"--- Menu ---"}</h2>
        <ul>
          <h2 className="font-bold">{`Recommended: (${itemCards?.length})`}</h2>
          {itemCards?.map((item) => (
            <div key={item?.card?.info.id}>
              <div className="flex w-[800px] justify-between items-center m-2.5 p-4">
                <div className="">
                  <h3 className="font-bold">{item.card?.info.name}</h3>
                  <p>
                    {(item.card?.info.price ?? item.card?.info.defaultPrice)/100} Rs.
                  </p>
                   <p>Rating -  {item.card?.info?.ratings?.aggregatedRating?.rating}</p>
                   <p>{item.card?.info.cuisines}</p>
                </div>
                <img
                  src={CDN_URL + item.card?.info.imageId}
                  className="w-[200px] h-[200px] rounded-md"
                  alt="menu_logo"
                />
              </div>
              <div className="border-b w-[800px]"/>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
