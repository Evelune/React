import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent"
import Banner from "./Components/Banner"
import Card from "./Components/Card"
import Body from "./Components/Body"


const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Banner />
      <Body/>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("container"));

root.render(<AppLayout />);
