import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartContext from "../Contexts/CartContext";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const WishlistItems = ({ item }) => {
    const [toCart, setToCart] = useState(false)
    const { cartItems, addToCart, addToWishlist } = useContext(CartContext)
    const { product_image, product_title, description, price } = item
    const id = useParams()


    useEffect(() => {
        cartItems.map((i) => (
            item.product_id==i.product_id && setToCart(true)
        ))
    }, [id])

    const handleCart = () => {
        addToCart(item)
        const iscart = !toCart
        setToCart(!toCart)
        toast.success(`${iscart ? "Added to cart" : "Removed from cart"}`, {
            position: "top-right",  
            autoClose: 3000,        
            closeOnClick: true,     
            pauseOnHover: true, 
            draggable: true,
        });
    }

    const handleWishlist = () => {
        addToWishlist(item)
        toast.success("Removed from wishlist", {
            position: "top-right",  
            autoClose: 3000,        
            closeOnClick: true,     
            pauseOnHover: true, 
            draggable: true,
        });
    }

    return (
        <div className="flex flex-col md:flex-row w-[100%] md:w-full bg-white rounded-xl mx-auto items-center p-4 gap-3 md:gap-6">
            <div className="w-full md:w-[20%] flex justify-between">
                <img src={`${product_image}`} alt="" className="rounded-md w-[74%]"/>
                <IoIosCloseCircleOutline className={"md:hidden text-4xl text-red-600 cursor-pointer mb-auto mt-1 mr-1"} onClick={handleWishlist}></IoIosCloseCircleOutline>
            </div>
            <div className="flex-grow">
                <h1 className="font-bold text-[1.2rem] mb-2">{product_title}</h1>
                <p className="text-gray-500 mb-2">{description}</p>
                <p className="font-semibold text-gray-600 mb-2">Price: {price}</p>
                <button onClick={handleCart} className={`flex ${toCart ? "bg-gray-300 text-black" : "bg-primary text-white"} py-1 md:py-2 px-3 md:px-6 text-sm md:text-base rounded-[2rem] border-2 border-primary font-semibold`}>{toCart ? "Remove from cart" : "Add to cart"}</button>
            </div>
            <IoIosCloseCircleOutline className={"md:flex hidden text-4xl text-red-600 cursor-pointer mb-auto mt-6 mr-6"} onClick={handleWishlist}></IoIosCloseCircleOutline>
        </div>
    );
};

WishlistItems.propTypes = {
    item: PropTypes.object.isRequired
}

export default WishlistItems;