import { createContext, useContext, useEffect, useState } from "react";
import { bannerImages } from "../resources/images";
import { IoSearch } from "react-icons/io5";
import userContext from "../utils/userContext";

const Banner = ({ searchText, setSearchText }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="w-full h-[70vh] flex justify-center items-center relative">
      <img
        className="w-full h-full object-cover object-center "
        src={bannerImages[currentImage]}
        alt="foodItems"
      ></img>
      <div className="bg-white absolute pt-2 pb-2 pl-4 pr-6 gap-6 flex justify-between items-center z-12 rounded-md ">
        <input
          className="text-black w-100 pt-4 pb-4 pr-4 px-4 outline-none focus:ring-0 text-xl"
          type="text"
          placeholder="Search food...."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="flex justify-center items-center pt-2 pb-2 pr-6 pl-6 gap-3 bg-black text-white rounded-sm"
          type="submit"
          onClick={() => {
            console.log(searchText);
          }}
        >
          <IoSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
