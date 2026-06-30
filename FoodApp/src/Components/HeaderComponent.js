import { useEffect, useState ,useContext } from "react";
import { LOGO } from "../utils/Constants";
import { IoCartOutline } from "react-icons/io5";
import { BiLogIn, BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/OnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";




const HeaderComponent = () => {
  const [btnState, setBtnState] = useState("Log In");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("Header Rendered");

  const status = OnlineStatus();

  let {loggedIn_User}= useContext(userContext)

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);
  

  
  

  return (
    <div className="flex justify-between items-center pl-10 pr-10  pt-1 h-fit">
      <div className="w-48">
        <img className="w-24 cursor-pointer" src={LOGO} onClick={() => window.location.reload()}
></img>
      </div>
      <div>
        <ul className="flex justify-between gap-6">
          <li>
            <Link className="hover:border-b-2" to={"/"} >
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-2" to={"/menu"}>
              Menu
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-2" to={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-2" to={"/contact"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-2" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li className="link">Satus : {status ? "✅" : "❤️"}</li>
        </ul>
      </div>
      <div>
        <ul className="flex  justify-end items-center gap-4">
          <li className="flex justify-center-between items-center gap-3 bg-gray-300 hover:bg-gray-500 pl-3 pr-4 pt-2 pb-2 rounded-lg  text-black hover:text-white cursor-pointer w-fit">
            <IoCartOutline />
            <div className="gap-2 flex justify-between">
              <Link to={"/Cart"} className="flex gap-2">
              <p>Cart</p>
              {cartItems.length > 0 && <span className="px-1 rounded-4xl bg-gray-100">{cartItems.length}</span>}
              </Link>
            </div>
          </li>
          <li
            className="w-30 flex justify-center items-center gap-3 bg-black hover:bg-orange-500 pl-3 pr-4 pt-2 pb-2 rounded-lg  text-white hover:text-white cursor-pointer"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >{isLoggedIn ? <BiLogOutCircle /> : <BiLogIn />}
            <p>{isLoggedIn ? loggedIn_User : "Log In"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
