import Card  from "./Card";
import reslist  from "../utils/reslist";


const Body = () => {
  return (
    <div className="mainBody">
      <div className="main">
        <div className="resturant">
          <p>Total Resturant</p>
          <span>200+</span>
        </div>
        <div className="menuOption">
          <ul>
            <li>Chines</li>
            <li>Indian</li>
            <li>Marathi</li>
            <li>BreakFast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
          <button className="filter" type="submit">
            Fitler
          </button>
        </div>
      </div>
      <div className="foodCardContainer">
        {/* <Card cardData ={reslist[0]}/> */}
        {
            reslist.map(i => <Card key={i.id} cardData ={i}/>)
        }
      </div>
    </div>
  );
};


export default Body