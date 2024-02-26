import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlneStatus";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li className="hover:bg-purple-100 px-4">
            <Link to={"/"}>Carts</Link>
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
