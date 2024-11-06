import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import CartItems from "./CartItems";

const Cart = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <div>
            <div>
                {cartItems.map((element, index) => (
                    <CartItems key={index} item={element}></CartItems>
                ))}
            </div>
        </div>
    );
};

export default Cart;