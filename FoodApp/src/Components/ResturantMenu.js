import React, { useEffect } from "react";
import { SWIGGY_URL } from "../utils/Constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resID } = useParams();

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.58430&lng=77.69380&restaurantId=1005073",
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{resID}</h1>
      <h1></h1>
    </div>
  );
};

export default ResturantMenu;
