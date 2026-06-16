import { useEffect, useState } from "react";
import { bannerImages } from "../resources/images";

const Banner = ({ searchText, setSearchText }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

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
        src={bannerImages[currentImage]}
        alt="foodItems"
      ></img>
    </div>
  );
};

export default Banner;
