import React, { useState, useEffect } from "react";
import Card from "./Card";
// import reslist from "../utils/reslist";
import ShimmerUI from "./ShimmerUI";
import CounterButton from "./CounterButton";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/OnlineStatus"

// let listOfRestaurants = reslist.data.cards.find(
//   (c) => c?.card?.card?.id === "restaurant_grid_listing_v2",
// )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// console.log(listOfRestaurants);

const Body = ({ searchText }) => {
  const [items, setItems] = useState([]);

  console.log("Body Rerendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.58430&lng=77.69380&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json);
    setItems(
      json.data.cards.find(
        (c) => c?.card?.card?.id === "restaurant_grid_listing_v2",
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  const filteredRestaurants = (items ?? []).filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const isSearching = searchText.length > 0;

  const displayList = isSearching
    ? filteredRestaurants.length
    : (items ?? []).length;

  const status = OnlineStatus()
  if(status == false){
    return <h1>Your are offline please check your internet Connection</h1>
  }

  return !items || items.length === 0 ? (
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
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <Card cardData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
