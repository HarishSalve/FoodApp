import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [userInOut, setUserInOut] = useState("LogIn");
  const isOnline = useOnlineStatus();
  const { items } = useSelector((state) => state.cart);

  const Logo_Image = new URL(
    "../assets/food-logo-image.png",
    import.meta.url,
  ).toString();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center h-[180px] bg-pink-50 shadow-lg px-10">
      <div className="w-[180px]">
        <img src={Logo_Image} alt="logo" />
      </div>
      <div className="px-3">
        <ul className="flex gap-10">
          <li className="font-size-24 font-bold m-2.5">
            Online Status : {isOnline ? "✅" : "🔴"}
          </li>
          <li className="font-size-24 font-bold m-2.5">
            <Link to="/"> Home </Link>
          </li>
          <li className="font-size-24 font-bold  m-2.5">
            <Link to="/about" className="link">
              About us
            </Link>
          </li>
          <li className="font-size-24 font-bold m-2.5">
            <Link to="/contact" className="link">
              Contact us
            </Link>
          </li>
          <li className="font-size-24 font-bold m-2.5">
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li className="font-size-24 font-bold m-2.5">
            <Link to="/cart" className="link">
              Cart ({items?.length})
            </Link>
          </li>
          <button
            className="font-size-20 font-bold"
            onClick={() => {
              userInOut === "LogIn"
                ? setUserInOut("LogOut")
                : setUserInOut("LogIn");
            }}
          >
            {userInOut}
          </button>
          <li className="font-size-24 font-bold m-2.5">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
