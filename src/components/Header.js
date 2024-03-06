import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlneStatus";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useSelector} from "react-redux"; 



const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  const onlineStatus = useOnlineStatus();

const {loggedInUser}=useContext(UserContext);

//subscribing to store using selector
const cartItems=useSelector((store)=>store.cart.items);
console.log(cartItems);


  return (
    <div className="flex justify-between items-center bg-yellow-400 shadow-lg p-4">
      <div className="logo-container">
        <img className="h-16 rounded-full" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-4 text-xl font-bold">
          <li className="hover:bg-purple-100 px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:bg-purple-100 px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:bg-purple-100 px-4">
            <Link to={"/contacts"}>Contact</Link>
          </li>
          <li className="hover:bg-purple-100 px-4 font-bold">
            <Link to={"/Cart"}>Carts-({cartItems.length})</Link>
          </li>
          <li className="hover:bg-purple-100 px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li>{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <button
              className="px-5 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600"
              onClick={() => {
                setbtnname(btnname === "Login" ? "Logout" : "Login");
              }}
            >
              {btnname}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
