import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductRating from "./ProductRating";
import CartContext from "../Contexts/CartContext";
import { BiHeart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const [details, setDetails] = useState()
    const [toCart, setToCart] = useState()
    const [toWishList, setToWishList] = useState()
    const id = useParams()
    const { cartItems, wishlistItems, addToCart, addToWishlist } = useContext(CartContext)
    
    useEffect(() => {
        fetch(`/productId/product-${id.id[1]}.json`)
        .then(response => response.json())
        .then(data => setDetails(data))
        
    }, [id]);
    useEffect(() => {
        cartItems.map((item) => (
            id.id[1]==item.product_id && setToCart(true)
        ))
    }, [id])
    useEffect(() => {
        wishlistItems.map((item) => (
            id.id[1]==item.product_id && setToWishList(true)
        ))
    }, [id])

    if (!details) {
        return <p>Loading...</p>;
    }

    const handleCart = () => {
        addToCart(details)
        const iscart = !toCart
        setToCart(!toCart)
        toast.success(`${iscart ? "Added to cart" : "Removed from cart"}`, {
            position: "top-right",  
            autoClose: 1000,        
            closeOnClick: true,     
            pauseOnHover: true, 
            draggable: true,
        });
    }

    const handleWishlist = () => {
        addToWishlist(details)
        const iswishlist = !toWishList
        setToWishList(!toWishList)
        toast.success(`${iswishlist ? "Added to wishlist" : "Removed from wishlist"}`, {
            position: "top-right",  
            autoClose: 1000,        
            closeOnClick: true,     
            pauseOnHover: true, 
            draggable: true,
        });
    }

    return (
        <div className="flex items-center rounded-3xl bg-white w-[60%] p-[3rem] gap-[2rem] border-2 border-primary mx-auto -translate-y-[40%]">
            <div className="w-[35%]"><img src={`${details.product_image}`} alt="img" className="w-full"/></div>
            <div>
                <h1 className="font-bold text-[1.5rem] mb-3">{details.product_title}</h1>
                <p className="font-semibold text-gray-600 mb-4 text-lg">Price: ${details.price}</p>
                <p className="border-2 border-green-500 bg-green-100 text-green-500 py-2 px-5 rounded-[2rem] inline-block mb-4">{details.availability == true ? "In Stock" : "Out of Stock"}</p>
                <p className="text-gray-500 mb-4">{details.description}</p>
                <p className="font-bold text-lg mb-3">Specifications:</p>
                <ul>
                    {details.specifications.map((element, index) => (
                        <li key={index} className="text-gray-500 mb-1">{index+1}. {element}</li>  
                    ))}
                </ul>
                <ProductRating rating={details.rating}></ProductRating>
                <div className="flex gap-3 mt-4">
                    <button onClick={handleCart} className={`flex ${toCart ? "bg-gray-300" : "bg-primary"} py-2 px-5 rounded-[2rem] justify-center items-center gap-3 ${toCart ? "text-black" : "text-white"}`}>
                        <span>{`${toCart ? "Remove from cart" : "Add to cart"}`}</span>
                        <BsCart3 className="text-xl"></BsCart3>
                    </button>
                    <button onClick={handleWishlist}><BiHeart className={`text-[2.5rem] p-2 border-2 rounded-full ${toWishList ? "bg-primary" : "bg-transparent"} hover:border-slate-400 transition-all duration-300 relative ${toWishList ? "text-white" : "text-black"}`}></BiHeart></button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;