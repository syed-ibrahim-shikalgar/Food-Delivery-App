import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="  bg-[#101426] text-[#7e7a7a] pt-[40px] h-[100vh]">
      <h1 className=" text-[25px] text-center font-[600]">Cart</h1>
      <div className="flex flex-row justify-around h-[12vh] pt-[40px]">
        <button
          onClick={() => handleClearCart()}
          className="py-[10px] px-[20px] bg-[#7E7A7A] text-[#000] rounded-[10px]"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1 className="text-center mt-[50px] text-[30px]">
          Cart is empty add items to the cart
        </h1>
      )}
      <div className="w-[60%] m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
