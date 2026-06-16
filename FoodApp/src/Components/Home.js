import { useState } from "react";
import Banner from "./Banner";
import Body from "./Body";

const Home =() => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Banner
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Body searchText={searchText} />
    </>
  );
}

export default Home