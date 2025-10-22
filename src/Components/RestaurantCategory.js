import DownArrow from "../assets/down-arrow.png";
import ItemsLists from "./ItemsLists";

const RestaurantCategory = ({ menu, expanded, setShowIndex }) => {
  //Controlled Component by RestaurantMenu
  const handleExpanded = () => {
    setShowIndex();
  };

  return (
    <div
      key={menu?.card?.card?.title}
      className="w-6/12 shadow-md cursor-pointer m-auto mt-3 p-3"
    >
      <div className="flex justify-between" onClick={handleExpanded}>
        <h2 className="font-bold">{`${menu?.card?.card?.title} : (${menu?.card?.card?.itemCards?.length})`}</h2>
        <img
          src={DownArrow}
          className={`w-6 h-6 ${expanded ? "rotate-180" : ""}`}
        />
      </div>
      {expanded && <ItemsLists menuData={menu?.card?.card} />}
    </div>
  );
};

export default RestaurantCategory;
