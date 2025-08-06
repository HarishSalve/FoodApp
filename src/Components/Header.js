import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [userInOut, setUserInOut] = useState("LogIn");
  console.log("Header render  ");

  useEffect(() => {
    console.log("useEffect call");
  });
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className="link"> Home </Link>
          </li>
          <li>
            <Link to="/about" className="link">About us</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact us</Link>
          </li>
          <li className="link"> Cart </li>
          <button
            onClick={() => {
              userInOut === "LogIn"
                ? setUserInOut("LogOut")
                : setUserInOut("LogIn");
            }}
          >
            {userInOut}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
