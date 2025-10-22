import { CDN_URL } from "../utils/constants";

const ItemsLists = ({ menuData }) => {
  return (
    <div>
      {menuData?.itemCards?.map((item) => (
        <div key={item?.card?.info.id}>
          <div className="flex w-full justify-between items-center m-2.5 p-4">
            <div className="">
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
            <img
              src={CDN_URL + item.card?.info.imageId}
              className="w-3/12 rounded-md"
              alt="menu_logo"
            />
          </div>
          <div className="border-b w-full" />
        </div>
      ))}
    </div>
  );
};

export default ItemsLists;
