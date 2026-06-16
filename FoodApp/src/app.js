import React from "react";
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
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
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
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("container"));

root.render(<RouterProvider router={appRouter} />);
