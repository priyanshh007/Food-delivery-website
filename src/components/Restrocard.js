import React from "react";

const Restrocard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    Id,
  } = resData?.info;

  return (
    <div className="bg-white h-[400px] w-[320px] p-4 m-4 shadow-lg rounded-lg object-cover  transition duration-300 transform hover:scale-105">
      <img
        className="h-[180px] w-full object-cover rounded-t-lg mb-4"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="text-black">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <div className="mb-2">
          <em className="text-gray-500">{cuisines.join(', ')}</em>
        </div>
        <hr className="border-gray-300 my-2" />
        <div className="flex justify-between items-center mt-2">
          <div>
            <h5 className="font-bold text-lg">{costForTwo}</h5>
            <h5 className="text-yellow-500">{avgRating} stars</h5>
          </div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};


//Higher order component
//input--Restrocard -->restrocard promoted

export const withPromoteLabel = (Restrocard) => {
    return (props) => {
      return (
        <div className="promoted-label">
          <label className="absolute z-10 bg-yellow-500 text-white p-2 rounded-md">Promoted</label>
          <Restrocard {...props} />
        </div>
      );
    };
  };
  

export default Restrocard;
