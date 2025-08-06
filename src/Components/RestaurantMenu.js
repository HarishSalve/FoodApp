import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {

    const [restInfo, setRestInfo] = useState(null)
    const { resId } = useParams()
    useEffect(() => {
        fetchRestaurant()
    }, [])

    const fetchRestaurant = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4914883&lng=73.82172899999999&restaurantId=' + resId)
        const restObj = await data.json()
        setRestInfo(restObj)
        console.log(restObj)
    }

    if (!restInfo) return <Shimmer />

    const { name, avgRatingString, cuisines, costForTwoMessage, areaName } = restInfo?.data?.cards[0]?.card?.card?.info

    const itemCards = restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    return (
        <>
            <div>
                <h2>{name}</h2>
                <ul>
                    <li><h3>{cuisines.join(', ')} - Rs. {costForTwoMessage}</h3></li>
                    <li><h3>{areaName}</h3></li>
                    <li><h3>{avgRatingString}</h3></li>
                </ul>
                <ul>
                    {itemCards?.map((item) => (
                        <div key={item?.card?.info.id}>
                            <li>{item.card?.info.name}</li>
                            <p>Rs. - {item.card?.info.price ?? item.card?.info.defaultPrice}</p>
                        </div>
                    ))}
                </ul>

            </div >
        </>
    )
}

export default RestaurantMenu