import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItems } from "../utils/CardSlice";
import Cart from "./Cart";

const Card = (props) => {
  const { cardData } = props;
  const { id, name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo ,promote } = cardData;

  console.log(cardData);

  const dispatch = useDispatch()

  const handler = (cardData) =>{
    dispatch(addItems(cardData))
  }
    

  return (
    <div className="group flex flex-col justify-between h-fit w-88 p-6 border border-gray-100  gap-6 hover:shadow-2xl hover: shadow-gray-200 hover:bg-gray-200">
      <div className="flex flex-col relative overflow-hidden justify-center items-center">
        <img className="h-48 w-full object-cover object-center" src={CDN_URL + cloudinaryImageId}></img>
        <button
          className="absolute bottom-1 pl-8 pr-8
        bg-black text-white py-2
        opacity-0 translate-y-full
        transition-all duration-300 ease-in-out
        group-hover:opacity-100
        group-hover:-translate-y-2
        hover:bg-orange-500
        cursor-pointer"
        onClick={()=> handler(cardData)}
        >
        Add
        </button>
      </div>
      <h3>{name}</h3>
      <p className="truncate w-full">{cuisines.join(", ")}</p>
      <ul className="flex w-full justify-between items-center gap-6">
        <li>{avgRating + "⭐️"}</li>
        <li>{sla.deliveryTime + "min"}</li>
        <li>{costForTwo}</li>
      </ul>
    </div>
  );
};

export const promotedResturants = (Card)=>{
  return (props) => {
    return (
      <div>
      <label className="z-20 absolute m-6 pt-1 pb-2 pl-3 pr-4 bg-black text-white ">Promoted</label>
      <Card {...props}/>
      </div>
    )
  }
}

export default Card;
