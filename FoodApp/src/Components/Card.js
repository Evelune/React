import { CDN_URL } from "../utils/Constants";

const Card = (props) => {
    console.log("props " , props);    
    
  const { cardData } = props;
      console.log("cardData" ,cardData);

  const { name, cuisines, image, rating, delivery_time, cost_for_two } =
    cardData;

  return (
    <div className="foodCard">
      <img
        className="foodImage"
        src={ CDN_URL + image
        }
      ></img>
      <div className="foodInfo">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <ul>
          <li>{rating+"⭐️"}</li>
          <li>{delivery_time}</li>
          <li>{cost_for_two}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card