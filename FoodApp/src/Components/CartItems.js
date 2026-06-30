import React from "react";
import { CDN_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../utils/CardSlice";

const CartItems = (props) => {
    const {data} = props
    console.log(data);
    
  const { name, cuisines, costForTwo, cloudinaryImageId } = data

  console.log(props.data);

  const dispatch = useDispatch()

  const remove = (n) => {
    dispatch(removeItems(n))
  }


  return (
    <div className="px-16 py-8">
      <div className="flex flex-row-reverse justify-between bg-gray-100 w-full items-center py-3 px-3 border-b border-gray-200">
        <img
          className="w-30 h-30 object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
          <p className="text-xl">{costForTwo}</p>
        </div>
      </div>
      <div className="flex w-full justify-end px-3">
        <button className="px-4 py-2 border border-gray-500 text-gray-500 mt-2 hover:text-white hover:bg-black" onClick={()=>remove(data.id)}>
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItems;
