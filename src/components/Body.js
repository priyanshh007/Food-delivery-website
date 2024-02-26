import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Restrocard, { withPromoteLabel } from "./Restrocard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlneStatus";

const Body = () => {
  // State variables
  const [listofRestaurants, setlistofRestaurant] = useState([]);
  const [filterres, setfilterres] = useState([]);
  const [serchText, setserchText] = useState("");

  // Higher order component
  const RestrocardPromoted = withPromoteLabel(Restrocard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.25470&lng=77.39370");
      const json = await data.json();
      setlistofRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setfilterres(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline. Check your connection!</h1>;
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="h-[80px] flex py-5 m-2 my-3 bg-purple-200 justify-center">
        <div className="search-container px-14">
          <input
            type="text"
            className="h-8 hover:bg-green-50"
            value={serchText}
            onChange={(e) => {
              setserchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 h-8 py-1 bg-slate-500 hover:bg-slate-200 text-white rounded-md"
            onClick={() => {
              let filteredrestaurant = listofRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(serchText.toLowerCase())
              );
              setfilterres(filteredrestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="p-2 m-2 h-8 py-1 bg-slate-500 hover:bg-slate-200 text-white rounded-md w-40"
          onClick={() => {
            const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4.2);
            setfilterres(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="flex flex-wrap bg-slate-50 justify-center">
        {filterres.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestrocardPromoted resData={restaurant} />
            ) : (
              <Restrocard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
