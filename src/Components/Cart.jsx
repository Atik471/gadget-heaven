import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import CartItems from "./CartItems";
import { FaFilter } from "react-icons/fa";
import { TbMoodEmpty } from "react-icons/tb";

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
        <div className="m-auto w-[92%] md:w-[80%] my-[4rem]">
            <div className="flex flex-col md:flex-row justify-between gap-3">
                <div className="flex justify-between">
                    <h1 className="text-lg md:text-xl font-bold">Cart</h1>
                    <h1 className="md:hidden inline-block text-base md:text-xl font-bold">Total Price: {totalPrice}</h1>
                </div>
                
                <div className="flex flex-col md:flex-row gap-3 items-center mr-auto md:mr-0">
                    <h1 className="text-base md:text-xl font-bold md:inline-block hidden">Total Price: {totalPrice}</h1>
                    <div className="flex gap-3">
                        <button className="text-primary font-semibold text-sm md:text-base py-1 md:py-2 px-3 md:px-6 rounded-[3rem] border-2  border-[#9236CE] border-b-[#D958AD] flex gap-3 items-center" onClick={handleSort} >
                        Sort by Price <FaFilter />
                        </button>
                        <button onClick={handePurchase} className={`${totalPrice != 0 ? "bg-gradient-to-b from-[#9232DF] to-[#DF60DF] text-white" : "text-gray-700 border-2 border-gray-400 bg-gray-200"} font-semibold text-sm md:text-base py-1 md:py-2 px-3 md:px-6 rounded-[3rem]`} disabled = {totalPrice == 0}>Purchase</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 my-10">
                {cartItems.map((element, index) => (
                    <CartItems key={index} item={element}></CartItems>
                ))}
            </div>
            {
                cartItems.length == 0 && 
                <div className="text-center mt-[1rem] md:mt-[3rem] mb-[5rem] md:mb-[8rem]">
                    <TbMoodEmpty className="mx-auto text-[4rem] md:text-[6rem] font-extrabold text-red-600 mb-[1rem] md:mb-[2rem]"></TbMoodEmpty>
                    <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-red-500">No products added here</h1>
                </div>
            }
        </div>
    );
};

export default Cart;