import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import CartItems from "./CartItems";
import { FaFilter } from "react-icons/fa";

const Cart = () => {
    const { cartItems, sortCart, isOpen, setIsOpen, clearCart } = useContext(CartContext)

    let totalPrice = 0
    cartItems.map((i) =>(
        totalPrice += i.price
    ))

    const handleSort = () => {
        sortCart()
    }
    const handePurchase = () => {
        clearCart()
        setIsOpen(!isOpen)
    }


    return (
        <div className="m-auto w-[80%] my-[4rem]">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">Cart</h1>
                <div className="flex gap-3 items-center">
                    <h1 className="text-xl font-bold">Total Price: {totalPrice}</h1>
                    <button className="text-primary font-semibold py-2 px-6 rounded-[3rem] border-2  border-[#9236CE] border-b-[#D958AD] flex gap-3 items-center" onClick={handleSort} >
                    Sort by Price <FaFilter />
                    </button>
                    <button onClick={handePurchase} className="bg-gradient-to-b from-[#9232DF] to-[#DF60DF] text-white font-semibold py-2 px-6 rounded-[3rem]">Purchase</button>
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