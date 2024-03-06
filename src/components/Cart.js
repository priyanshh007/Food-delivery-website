import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/CartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Dispatch the clearCart action
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h2 className="text-xl mt-6 font-medium">
            Your cart is empty. Add some items to the cart 🛒.
          </h2>
        )}
        {cartItems.length > 0 && <ItemList items={cartItems} />}
        {cartItems.length > 0 && (
          <button
            className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"
            onClick={handleClearCart}
          >
            Clear Cart 🧹
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
