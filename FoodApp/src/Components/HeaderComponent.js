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
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
