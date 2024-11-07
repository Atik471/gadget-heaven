import PropTypes from "prop-types";
import { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartContext from "../Contexts/CartContext";
import { toast } from "react-toastify";

const CartItems = ({ item }) => {
    const { addToCart } = useContext(CartContext)
    const { product_image, product_title, description, price } = item

    const handleCart = () => {
        addToCart(item)
        toast.success("Removed from cart", {
            position: "top-right",  
            autoClose: 3000,        
            closeOnClick: true,     
            pauseOnHover: true, 
            draggable: true,
        });
    }

    return (
        <div className="flex w-[80%] bg-white rounded-xl mx-auto items-center p-4 gap-6">
            <div className="w-[15%]">
                <img src={`${product_image}`} alt="" className="rounded-md"/>
            </div>
            <div className="flex-grow">
                <h1 className="font-bold text-[1.2rem] mb-2">{product_title}</h1>
                <p className="text-gray-500 mb-2">{description}</p>
                <p className="font-semibold text-gray-600 mb-2">Price: {price}</p>
            </div>
            <IoIosCloseCircleOutline onClick={handleCart} className={"text-4xl text-red-600 cursor-pointer"}></IoIosCloseCircleOutline>
        </div>
    );
};

CartItems.propTypes = {
    item: PropTypes.object.isRequired
}

export default CartItems;