import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import CartItems from "./CartItems";

const Cart = () => {
    const { cartItems, sortCart } = useContext(CartContext)

    let totalPrice = 0
    cartItems.map((i) =>(
        totalPrice += i.price
    ))

    const handleSort = () => {
        sortCart()
    }

    return (
        <div>
            <div>
                <h1>Cart</h1>
                <div>
                    <h1>Total Price: {totalPrice}</h1>
                    <button onClick={handleSort}>Sort by Price</button>
                    <button>Purchase</button>
                </div>
            </div>
            <div>
                {cartItems.map((element, index) => (
                    <CartItems key={index} item={element}></CartItems>
                ))}
            </div>
        </div>
    );
};

export default Cart;