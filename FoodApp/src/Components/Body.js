import React, { useState, useEffect, useContext } from "react";
import Card, { promotedResturants } from "./Card";
// import reslist from "../utils/reslist";
import ShimmerUI from "./ShimmerUI";
import CounterButton from "./CounterButton";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/OnlineStatus";
import { SWIGGY_URL } from "../utils/Constants";
import userContext from "../utils/userContext";

// let listOfRestaurants = reslist.data.cards.find(
//   (c) => c?.card?.card?.id === "restaurant_grid_listing_v2",
// )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// console.log(listOfRestaurants);

const Body = ({ searchText }) => {
  const [items, setItems] = useState([]);

  console.log(items);

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

  const {loggedIn_User , setUserName} = useContext(userContext) 
  const filteredRestaurants = (items ?? []).filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const isSearching = searchText.length > 0;

  const displayList = isSearching
    ? filteredRestaurants.length
    : (items ?? []).length;

  const status = OnlineStatus();
  if (status == false) {
    return <h1>Your are offline please check your internet Connection</h1>;
  }

  const ResturantPromoted = promotedResturants(Card);

  return !items || items.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="w-full pt-4 pb-4 pl-6 pr-6">
      <div className="flex pt-4 pb-4 pl-6 pr-6 justify-between items-center ">
        <div className="font-bold text-6xl">
          <p>{displayList} Resturant</p>
        </div>

        <div className="flex gap-8 justify-between items-center ">
          <ul className="flex gap-6 cursor-pointer h-6">
            <li className="hover:border-b-2 hover:border-black">Chines</li>
            <li className="hover:border-b-2 hover:border-black">Indian</li>
            <li className="hover:border-b-2 hover:border-black">Marathi</li>
            <li className="hover:border-b-2 hover:border-black">BreakFast</li>
            <li className="hover:border-b-2 hover:border-black">Lunch</li>
            <li className="hover:border-b-2 hover:border-black">Dinner</li>
            {/* <input
              className="text-black w-100 pt-4 pb-4 pr-4 px-4 outline-none focus:ring-0 text-xl"
              type="text"
              placeholder="set userName...."
              value={loggedIn_User}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input> */}
          </ul>
          <button
            className="pt-3 pb-3 pr-6 pl-6 border-2 border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white hover:rounded-md hover:border-white cursor-pointer"
            onClick={() => {
              setItems(items.filter((i) => i.info.avgRating > "4"));
            }}
          >
            Top Rating Resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 pl-10 pr-10 pt-10 pb-10">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <ResturantPromoted cardData={restaurant.info} />
            ) : (
              <Card cardData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
