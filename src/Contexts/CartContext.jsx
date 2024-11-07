// CartContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.product_id === item.product_id);
      if (itemExists) {
        return prevItems.filter((i) => i.product_id !== item.product_id);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.product_id === item.product_id);
      if (itemExists) {
        return prevItems.filter((i) => i.product_id !== item.product_id);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const sortCart = () => {
    setCartItems([...cartItems].sort((a, b) => a.price - b.price));
  } 

  return (
    <CartContext.Provider value={{ cartItems, addToCart, wishlistItems, addToWishlist, sortCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
    children: PropTypes.node
}

export default CartContext;
