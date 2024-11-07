// CartContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

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
    setCartItems([...cartItems].sort((a, b) => b.price - a.price));
  } 

  let tPrice = 0
  const clearCart = () => {
    cartItems.map((i) =>(
        tPrice += i.price)
    )
    setTotalPrice(tPrice)
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, wishlistItems, addToWishlist, sortCart, isOpen, setIsOpen, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
    children: PropTypes.node
}

export default CartContext;
