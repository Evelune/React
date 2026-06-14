import { useState } from "react";
import { LOGO } from "../utils/Constants";

const HeaderComponent = () => {
  const [btnState, setBtnState] = useState("Log In");

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
          <li className="cart">Cart</li>
          <li
            className="signUp"
            onClick={() => {
              btnState === "Log In"
                ? setBtnState("Log Out")
                : setBtnState("Log In");
            }}
          >
          {btnState}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
