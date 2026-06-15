import { useState } from "react";
import banne1 from "../resource/food1.png";
import banner2 from "../resource/food2.png";
import banner3 from "../resource/food3.png";
import banner4 from "../resource/food4.png";
import banner5 from "../resource/food5.png";

const Banner = ({ searchText, setSearchText }) => {
  const images = [banne1, banner2, banner3, banner4, banner5];
  console.log(images[0]);
  
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="banner">
      <div className="search">
        <input
          className="searchItems"
          type="text"
          placeholder="Search food...."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="submit"
          type="submit"
          onClick={() => {
            console.log(searchText);
          }}
        >
          Search
        </button>
      </div>
      <img
        className="food"
        // src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src={images[currentImage]}
        alt="foodItems"
      ></img>
    </div>
  );
};

export default Banner;
