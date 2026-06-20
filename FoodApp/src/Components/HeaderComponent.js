import { useEffect, useState } from "react";
import { LOGO } from "../utils/Constants";
import { IoCartOutline } from "react-icons/io5";
import { BiLogIn, BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/OnlineStatus";


const HeaderComponent = () => {
  const [btnState, setBtnState] = useState("Log In");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("Header Rendered");
  
 const status = OnlineStatus()

  return (
    <div className="flex justify-between h-20 items-center p-10">
      <div className="w-48">
        <img className="w-30" src={LOGO}></img>
      </div>
      <div >
        <ul className="flex justify-between gap-4">
          <li><Link  className="hover:b" to={"/"}>Home</Link></li>
          <li><Link className="link" to={"/menu"}>Menu</Link></li>
          <li><Link className="link" to={"/about"}>About Us</Link></li>
          <li><Link className="link" to={"/contact"}>Contact Us</Link></li>
          <li><Link className="link" to={"/grocery"}>Grocery</Link></li>
          <li className="link">Satus : {status ? "✅" : "❤️" }</li>
        </ul>
      </div>
      <div >
        <ul className="flex justify-between gap-4 items-center" >
          <li className="flex justify-between gap-4">
            <IoCartOutline />
            <p>Cart</p>
          </li>
          <li className="flex justify-between gap-4 items-center" onClick={() => 
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
