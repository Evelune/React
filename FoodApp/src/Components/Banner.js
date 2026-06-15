import { useState } from "react";

const Banner = () => {

  const [searchChange ,setSearchChange] = useState("h")
  console.log(searchChange);

  return (
    <div className="banner">
      <div className="search">
        <input
          className="searchItems"
          type="text"
          placeholder="Search food...."
          value={searchChange}
          onChange={
            (e)=>{
              setSearchChange(e.target.value)
            }
          }

        ></input>
        <button className="submit" type="submit" 
        onClick={()=>{
          console.log(searchChange);
        }}>
          Search
        </button>
      </div>
      <img
        className="food"
        src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="foodItems"
      ></img>
    </div>
  );
};

export default Banner