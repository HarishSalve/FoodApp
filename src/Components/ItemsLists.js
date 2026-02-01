import { addItem } from "../store/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemsLists = ({ menuData }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {menuData?.map((item) => (
        <div key={item?.card?.info.id}>
          <div className="flex w-full justify-between items-center m-2.5 p-4">
            <div className="w-9/12">
              <h3 className="font-bold">{item.card?.info.name}</h3>
              <p>
                {(item.card?.info.price ?? item.card?.info.defaultPrice) / 100}
                Rs.
              </p>
              <p>
                Rating -{item.card?.info?.ratings?.aggregatedRating?.rating}
              </p>
              <p>{item.card?.info.cuisines}</p>
              <p className="font-extralight font-serif italic text-ellipsis">
                {item.card?.info.description}
              </p>
            </div>
            <div className="w-3/12 relative">
              <img
                src={CDN_URL + item.card?.info.imageId}
                className="rounded-md"
                alt="menu_logo"
              />
              <button
                className="border rounded-xl bg-amber-500 absolute p-2 ml-10 bottom-0"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
          <div className="border-b w-full" />
        </div>
      ))}
    </div>
  );
};

export default ItemsLists;
