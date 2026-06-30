import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/CardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col bg-white items-center justify-center pb-24">
      <div className="flex justify-between w-200 items-center">
        <h1 className="text-5xl font-extrabold mt-6">Cart</h1>
        <div>
          <button
            className="px-4 py-2 border border-gray-500 text-gray-500 hover:text-white hover:bg-black "
            onClick={handelClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="w-200 bg-gray-100 h-fit mt-10 ">
        {cartItems.length > 0 ? (
          cartItems.map((i) => <CartItems key={i.id} data={i} />)
        ) : (
          <h1 className="text-6xl">Card is Emptry</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
