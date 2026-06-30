import React, { useEffect } from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import ErrorComponent from "./Components/ErrorComponent";
import Body from "./Components/Body";
import { useState } from "react";
import Home from "./Components/Home";
import ResturantMenu from "./Components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy ,Suspense } from "react";
import ShimmerUI from "./Components/ShimmerUI";
import { SWIGGY_URL } from "./utils/Constants";
import userContext from "./utils/userContext";
import appStore from "./utils/appStore";
import {Provider} from "react-redux"
import Cart from "./Components/Cart";



const Grocery = lazy(()=>import("./Components/Grocery"));

const AppLayout = () => {

  const [ userName , setUserName] = useState()
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    const data= {
      name : "JD",
    };

    setUserName(data.name)

  },[])


  return (
    <Provider store={appStore}>
    <userContext.Provider value ={{loggedIn_User : userName , setUserName} }>
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );

};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path : "/restaurant/:resID",
        element : <ResturantMenu />,
      },
      {
        path:"/grocery",
        element : (
          <Suspense fallback = {<ShimmerUI/>}><Grocery /></Suspense>
        )
      },
      {
        path : "/cart",
        element : <Cart />
      }
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("container"));

root.render(<RouterProvider router={appRouter} />);
