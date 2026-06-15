import { CDN_URL } from "../utils/Constants";

const Card = (props) => {

    
  const { cardData } = props;
  const { id, name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } = cardData


  return (
    <div className="foodCard">
      <div className="topHead">
        <img
        className="foodImage"
        src={ CDN_URL + cloudinaryImageId }
      ></img>
      <button className="buyItems">Add</button>
      </div>
      <div className="foodInfo">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <ul>
          <li>{avgRating+"⭐️"}</li>
          <li>{sla.deliveryTime+"min"}</li>
          <li>{costForTwo}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card