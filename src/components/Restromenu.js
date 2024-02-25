import useRestaurantMenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
   
 
const Restromenu=()=>{
     
    const {resId}=useParams();
  
    const resInfo=useRestaurantMenu(resId);
    
     if(resInfo==null)
     {
       return <Shimmer/>;
     };

     const {name,cuisines,costForTwoMessage,avgRating,cloudinaryImageId}= resInfo?.cards[2]?.card?.card?.info;

      // const {p}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
      
      console.log(resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
      

    return (
         <div className="flex flex-col my-3 bg-red-100">
         <div className="flex justify-evenly ">
        <div className="py-10"> <h1 className="font-bold text-2xl justify-items-center">{name}</h1>
        <hr></hr>
         <em> {cuisines.join(",")}</em>
         {cuisines.join(",")}
         </div>
         <div className="flex float-end">
         <img className="justify-end"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+cloudinaryImageId}></img>
         </div>
          
         </div> 
         <h2>Menu</h2>
         <div className="Menu">
             {resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards.map((item)=>(
            <div className="menu-cards">
          
              <div className="menu-el-info">
              <h4>{item.card.info.name}</h4>
              <h5>{item.card.info.description}</h5>
              
              </div>
              <div>
              <img className="menu-logo"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+item.card.info.imageId}></img>
              </div>
            
            </div>
            ))} ;
      
        </div>
        </div>
    )
};

export default Restromenu;