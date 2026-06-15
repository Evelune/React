const AddItemsPopUP = () => {
  return (
    <div className="addItemsPopUp">
      <div className="topbody">
        <div className="popUpHeader">
        <p>name</p>
        <p>costForTwo</p>
      </div>
      <h3>Customise your Order</h3>
      <hr></hr>
      <div className="quantity">
        <p>Quantity</p>
        <div className="selectQuantity">
          <label htmlFor="500gm">500gm</label>
          <input type="radio" id="500gm"></input>
        </div>
      </div>
      </div>
      <div className="addItemPopUpFooter">
        <h2>costForTwo</h2>
        <button className="addItems">Add Items to Cart</button>
      </div>
    </div>
  );
};

export default AddItemsPopUP;
