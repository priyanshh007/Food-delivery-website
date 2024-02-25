import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlneStatus";

const Header=()=>{
 const[btnname,setbtnname]=useState("Login");

  const onlineStatus=useOnlineStatus();

    return <div className="flex justify-between bg-red-50 shadow-lg ">
            <div className="logo-container py-4 ">
                <img className="h-28 pl-2 rounded-full" src={LOGO_URL}/>
            </div>
            <div className="flex py-18">
                <ul className="flex py-16 justify-evenly">
      
                   <li className="sm:px-6 md:px-20 hover:bg-purple-100 font-bold text-xl"><Link to={"/"}>Home</Link></li>
                    <li className="sm:px-6 md:px-20 hover:bg-purple-100 font-bold text-xl"><Link to={"/about"}>About</Link></li>
                    <li className="sm:px-6 md:px-20 hover:bg-purple-100 font-bold text-xl"><Link to={"/contacts"}>Contact</Link></li>
                    <li className="sm:px-6 md:px-20 hover:bg-purple-100 font-bold text-xl"><Link to={"/"}>Carts</Link></li>
                    <li className="sm:px-6 md:px-20 hover:bg-purple-100 font-bold text-xl"><Link to={"/grocery"}>Grocery</Link></li>
                    </ul>
            </div>    
                   <ul className="flex">
                   <li className="">{onlineStatus?"✅":"🔴"}</li>
                    <li>
                    <button className="px-5" onClick={()=>{
                      btnname=="login"?setbtnname("Logout"):setbtnname("login")} }>
                      {btnname}
                    </button>
                    </li>
                    </ul>
                
          
            </div>
            
    }

    export default Header;