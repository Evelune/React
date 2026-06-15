import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Body from "./Components/Body";
import { useState } from "react";

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app">
      <HeaderComponent />
      <Banner searchText={searchText} setSearchText={setSearchText} />
      <Body searchText={searchText} />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("container"));

root.render(<AppLayout />);
