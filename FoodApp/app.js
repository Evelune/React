import React from "react";
import ReactDom from "react-dom/client";

/**
 * Header
 * - logo
 * - Nav Items
 *
 * Banner
 * -SearchBar
 * Body
 * - total resturant
 * -filter
 * card Container
 * - card
 * - Image , name , desc, rating, price , time
 *
 * Footer
 * - copyright
 * -link
 * -address
 * -contact info
 * -map
 *
 */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://template.canva.com/EAGXsRURT9o/1/0/1600w-JrzZUwc_CLQ.jpg"></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="cta">
        <ul>
          <li className="cart">Cart</li>
          <li className="signUp">Sign up</li>
        </ul>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="search">
        <input
          className="searchItems"
          type="text"
          placeholder="Search food...."
        ></input>
        <button className="submit" type="submit">
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

const Card = (props) => {
  const { cardData } = props;
  const { name, cuisines, image, rating, delivery_time, cost_for_two } =
    cardData;

  return (
    <div className="foodCard">
      <img
        className="foodImage"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" + image
        }
      ></img>
      <div className="foodInfo">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <ul>
          <li>{rating+"⭐️"}</li>
          <li>{delivery_time}</li>
          <li>{cost_for_two}</li>
        </ul>
      </div>
    </div>
  );
};

const reslist = [
  {
    id: "782852",
    name: "Cakezyy",
    image: "61eaaea91db2ab4aca0d594d5c104daa",
    cuisines: ["Bakery"],
    rating: "4.4",
    delivery_time: "45-55 mins",
    cost_for_two: "₹200 for two",
    area: "HSR",
  },
  {
    id: "50467",
    name: "Bakingo",
    image:
      "FOOD_CATALOG/IMAGES/CMS/2025/10/16/a7b81dd6-7357-4d7a-9aed-cbca5da45903_c662cfde-75ce-4e98-8eab-4814293278c3.JPG",
    cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
    rating: "4.5",
    delivery_time: "25-30 mins",
    cost_for_two: "₹300 for two",
    area: "Koramangala",
  },
  {
    id: "822029",
    name: "Mini Cake",
    image:
      "FOOD_CATALOG/IMAGES/CMS/2024/10/2/fc928aa2-8a92-4eec-81f3-e4a035bf826d_75f846c7-f43f-4bad-98dd-90f4b0eaf193.jpg",
    cuisines: ["Bakery", "Cakes and Pastries"],
    rating: "4.6",
    delivery_time: "50-60 mins",
    cost_for_two: "₹500 for two",
    area: "BTM",
  },
  {
    id: "534235",
    name: "Cheesecake & Co.",
    image: "b318c0b4bc2169550145ace1d6e791a2",
    cuisines: ["Bakery"],
    rating: "4.5",
    delivery_time: "20-25 mins",
    cost_for_two: "₹250 for two",
    area: "Koramangala",
  },
  {
    id: "168884",
    name: "Uncle Peter's Pancakes",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/9/c2b4a088-9530-4f06-a905-e1a6ba31fb72_168884.JPG",
    cuisines: [
      "Waffle",
      "Desserts",
      "American",
      "Continental",
      "Beverages",
      "Ice Cream",
    ],
    rating: "4.1",
    delivery_time: "40-45 mins",
    cost_for_two: "₹300 for two",
    area: "Indiranagar",
  },
  {
    id: "8244",
    name: "Polar Bear",
    image: "57262fe3839f0bff174f3d7e7cc8a2b4",
    cuisines: ["Ice Cream", "Desserts"],
    rating: "4.6",
    delivery_time: "15-20 mins",
    cost_for_two: "₹200 for two",
    area: "Koramangala",
  },
  {
    id: "914625",
    name: "Cream Stone Ice Cream",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/8/c95ef565-c6df-4840-ad13-133bc05b82f2_914625.JPG",
    cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
    rating: "4.5",
    delivery_time: "35-40 mins",
    cost_for_two: "₹250 for two",
    area: "Jayanagar",
  },
  {
    id: "272031",
    name: "Baskin Robbins",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/cf995759-2112-414d-985d-22f85eb61a7f_272031.jpg",
    cuisines: ["Desserts"],
    rating: "4.6",
    delivery_time: "25-30 mins",
    cost_for_two: "₹150 for two",
    area: "Koramangala",
  },
  {
    id: "532649",
    name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/25/c4ec2d23-6330-40ec-81a7-8e1c787b4526_532649.JPG",
    cuisines: ["Beverages", "Ice Cream", "Desserts"],
    rating: "4.3",
    delivery_time: "35-40 mins",
    cost_for_two: "₹250 for two",
    area: "Old Airport Road",
  },
];

const Body = () => {
  return (
    <div className="mainBody">
      <div className="main">
        <div className="resturant">
          <p>Total Resturant</p>
          <span>200+</span>
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
          <button className="filter" type="submit">
            Fitler
          </button>
        </div>
      </div>
      <div className="foodCardContainer">
        {/* <Card cardData ={reslist[0]}/> */}
        {
            reslist.map(i => <Card key={i.id} cardData ={i}/>)
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Banner />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("container"));

root.render(<AppLayout />);
