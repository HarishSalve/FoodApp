import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const restInfo = useRestaurantMenu(resId);

  if (!restInfo) return <ShimmerMenu />;

  const { name, avgRatingString, cuisines, costForTwoMessage, areaName } =
    restInfo?.data?.cards[0]?.card?.card?.info;

  const menuData =
    restInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const handleExpand = (index) => {
    if (showIndex === index) {
      setShowIndex(-1);
    } else {
      setShowIndex(index);
    }
  };

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
        {menuData?.map((menu, index) => (
          <RestaurantCategory
            menu={menu}
            index={index}
            expanded={index === showIndex ? true : false}
            setShowIndex={() => handleExpand(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
