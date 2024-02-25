import Body from "./Body";
const Restrocard=(props)=>{
    const{resData}=props;
    const{
        name,
        cuisines,
        costForTwo,
        avgRating,
        cloudinaryImageId,
        Id,
         }=resData?.info;
        
 return(
     <div className="
     h-[350px] w-[300px] p-2 m-2 shadow-lg bg-red-100 hover:bg-purple-200 rounded-lg" >
        <img className="h-[180px] w-[300px] rounded-lg"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+cloudinaryImageId}></img>
        <h3 className="font-bold"> 
               {name}
        </h3>
        <hr></hr>
        <div className="py-3">
            
        <em>{cuisines.join(', ')}</em>
               
       
        <h5 className="font-bold">{costForTwo}</h5>
        <h5>{avgRating} stars</h5>      
        </div>
    </div>)
}

export default Restrocard;