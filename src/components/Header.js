import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";

  const [btnName, setbtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items mt-[25px]">
        <ul>
          <li className="onl_stat">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <button
            className="login mr-[30px]"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="text-[18px] font-[600] text-[#908d8d]">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
