import React from "react";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restromenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;

  const addToCartHandler = (itemName) => {
    // Implement your addToCart logic here
    alert(`Added ${itemName} to cart!`);
  };

  return (
    <div className="flex flex-col my-3 bg-gray-100">
      <div className="flex justify-between p-6 bg-red-500 text-white">
        <div>
          <h1 className="font-bold text-3xl">{name}</h1>
          <hr className="my-2 border-white" />
          <em className="text-sm">{cuisines.join(", ")}</em>
        </div>
        <div>
          <img className="w-60 h-32 rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${cloudinaryImageId}`} alt={name} />
        </div>
      </div>

      <h2 className="text-2xl font-semibold p-4">Menu</h2>

      <div className="grid grid-cols-1 gap-4 p-4">
        {resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards.map((item) => (
          <div key={item.card.info.id} className="menu-card bg-white rounded-lg p-4 shadow-md cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <img className="w-full md:w-1/3 h-32 object-cover rounded-md mb-4 md:mb-0" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${item.card.info.imageId}`} alt={item.card.info.name} />
              <div className="md:ml-4 w-full md:w-2/3">
                <h4 className="text-lg font-semibold">{item.card.info.name}</h4>
                <h5 className="text-gray-600">{item.card.info.description}</h5>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">₹{item.card.info.price/100}</span>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    onClick={() => addToCartHandler(item.card.info.name)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restromenu;
