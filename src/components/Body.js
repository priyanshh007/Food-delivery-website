import Restrocard from "./Restrocard";
import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlneStatus";


const Body=()=>{
 //state variable-super powerful variable
const [listofRestaurants,setlistofRestaurant] =useState([]);

const[filterres,setfilterres]=useState([]);

const [serchText,setserchText]=useState("");

useEffect(()=>{
 fetchData();
},[]);

const fetchData=async()=>{
   const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.25470&lng=77.39370");
   const json=await data.json();
  // console.log(json.data);
  console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
 setlistofRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
 setfilterres(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
};

//conditional rendering
// if(listofRestaurants.length==0)
// {
//   return <Shimmer/>
// }

const onlineStatus=useOnlineStatus();
if(onlineStatus==false)
{
  return(
    <h1>
      Looks like you are offline check your connection !!
    </h1>
  )
}




//conditional rendering done using ternary operator
 return listofRestaurants.length==0?(<Shimmer/>):(
        <div className="body">
        <div className="h-[80px] flex py-5 m-2 my-3 bg-red-50 justify-center">
        <div className="search-container px-14  ">
          <input type="text" className="h-8 hover:bg-green-50" value={serchText} 
          onChange={(e)=>{
              setserchText(e.target.value);
          }}>
            </input>
            <button  
            className="p-2 m-2 h-8 py-1 bg-slate-500 hover:bg-slate-200 text-white rounded-md"   
            onClick={()=>{
             let filteredrestaurant=
             listofRestaurants.filter((res)=>res?.info?.name?.toLowerCase().includes(serchText.toLowerCase()));
             setfilterres(filteredrestaurant);
            }}>
              serch
            </button>
        </div>
        {/* hooks set___ logic */}
         <button 
         className="p-2 m-2 h-8 py-1 bg-slate-500 hover:bg-slate-200 text-white rounded-md  w-40"
         onClick={()=>{
         const filteredList=listofRestaurants.filter((res)=>res.info.
         avgRating>4.2);
          setfilterres(filteredList)
           }}>
          Top Rated 
        </button>
         </div>
         <div className="flex flex-wrap  bg-slate-50 justify-center">
          {filterres.map((restaurant)=>(
           <Link 
           key={restaurant.info.id}
           to={"/restaurants/"+restaurant.info.id}>
           <Restrocard   resData={restaurant} />
           </Link>
          ))};
         </div>
     </div>)
 
};
export default Body;