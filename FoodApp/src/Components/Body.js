import React, { useState, useEffect } from "react";
import Card from "./Card";
// import reslist from "../utils/reslist";
import ShimmerUI from "./ShimmerUI";
import CounterButton from "./CounterButton";

// let listOfRestaurants = reslist.data.cards.find(
//   (c) => c?.card?.card?.id === "restaurant_grid_listing_v2",
// )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// console.log(listOfRestaurants);

const Body = ({ searchText }) => {
  const [items, setItems] = useState([]);

  const filteredRestaurants = items.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  console.log("Body Rerendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json);
    setItems(
      json.data.cards.find(
        (c) => c?.card?.card?.id === "restaurant_grid_listing_v2",
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  // conditional Redering
  // if(items.length === 0){
  //   console.log(("loading Items"));
  //   return <ShimmerUI />
  // }

  const isSearching = searchText.length > 0;

  const displayList = isSearching ? filteredRestaurants.length : items.length;

  return items.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="mainBody">
      <div className="main">
        <div className="resturant">
          <p>{displayList} Resturant</p>
        </div>

        <div className="menuOption">
          <ul>
            <li>Chines</li>
            <li>Indian</li>
            <li>Marathi</li>
            <li>BreakFast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
          <button
            className="filter"
            onClick={() => {
              setItems(items.filter((i) => i.info.avgRating > "4"));
            }}
          >
            Top Rating Resturant
          </button>
        </div>
      </div>
      <div className="foodCardContainer">
        {filteredRestaurants.map((restaurant) => (
          <Card key={restaurant.info.id} cardData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
