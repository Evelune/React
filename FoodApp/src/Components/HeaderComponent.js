import { LOGO } from "../utils/Constants";

const HeaderComponent = () => {
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
          <li className="signUp">Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent
