import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData?.info;
   console.log('resData', resData.info)
  
  return (
    <div className="w-50 h-[400px] p-2.5 m-2.5 rounded-lg shadow-lg bg-gray-100 hover:bg-gray-300 border border-gray-200 hover:shadow-2xl overflow-auto [scrollbar-width:none]">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-full h-[150px]"
        alt="res_logo"
      />
      <div className="pt-2">
      <h4 className="font-bold">{name}</h4>
      <p className="card-info">{cuisines.join(", ")}</p>
      <p className="card-info">{avgRatingString}</p>
      <h4 className="font-bold">{costForTwo}</h4>
      <p className="card-info">{sla.slaString}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
