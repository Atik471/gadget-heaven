
import img from "../assets/Group.png"
import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Modal = () => {
    const { isOpen, setIsOpen, totalPrice } = useContext(CartContext)
    const navigate = useNavigate();

    const handeClose = () => {
        setIsOpen(!isOpen)
        navigate('/')
    }

    return (
        <div className={`fixed w-full h-full bg-black/45 ${isOpen ? "flex" : "hidden"} justify-center items-center`}>
            <div className="bg-white  py-[2rem] px-[3rem] rounded-xl flex flex-col justify-center text-center">
                <img src={img} alt="" className="mb-5 w-[4.5rem] mx-auto" />
                <h1 className="font-bold text-lg">Payment Successful</h1>
                <hr className=" border-gray-300 my-5" />
                <p className="text-gray-600 font-semibold mb-2">Thanks for purchasing</p>
                <p className="text-gray-600 font-semibold mb-4">Total: {totalPrice}</p>
                <button onClick={handeClose} className="bg-gray-300 rounded-[2rem] py-2 font-semibold mb-2">Close</button>
            </div>
        </div>
    );
};

export default Modal;