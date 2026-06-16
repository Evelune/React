import { useEffect, useState } from "react";
import { LOGO } from "../utils/Constants";
import { IoCartOutline } from "react-icons/io5";
import { BiLogIn, BiLogOutCircle } from "react-icons/bi";


const HeaderComponent = () => {
  const [btnState, setBtnState] = useState("Log In");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("Header Rendered");
  


  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO}></img>
      </div>
      <div className="navItems">
        <ul>
          <li><a className="headerComponent" href="http://localhost:1234/">Home</a></li>
          <li><a className="headerComponent" href="http://localhost:1234/menu">Menu</a></li>
          <li><a className="headerComponent" href="http://localhost:1234/about">About Us</a></li>
          <li><a className="headerComponent" href="http://localhost:1234/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="cta">
        <ul>
          <li className="cart">
            <IoCartOutline />
            <p>Cart</p>
          </li>
          <li className="signUp" onClick={() => 
            setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? <BiLogOutCircle /> : <BiLogIn />}
            <p>{isLoggedIn ? "Log Out" : "Log In"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
