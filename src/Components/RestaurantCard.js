import { CDN_URL } from "../utils/constants"


const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla} = resData?.info
    // console.log('resData', resData.info, props)
        return (
        <div className="res-Card">
            <img src={CDN_URL+cloudinaryImageId} className="res-logo" alt='res_logo' />
            <h4>{name}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>


        </div>
        )
}
export default RestaurantCard