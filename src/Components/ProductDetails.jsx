import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductRating from "./ProductRating";
import CartContext from "../Contexts/CartContext";

const ProductDetails = () => {
    const [details, setDetails] = useState()
    const id = useParams()
    const { addToCart, addToWishlist } = useContext(CartContext)
    
    useEffect(() => {
        fetch(`/productId/product-${id.id[1]}.json`)
        .then(response => response.json())
        .then(data => setDetails(data))
            
    }, [id]);

    if (!details) {
        return <p>Loading...</p>;
    }

    const handleCart = () => {
        addToCart(details)
    }

    const handleWishlist = () => {
        addToWishlist(details)
    }

    return (
        <div className="flex">
            <div><img src={`${details.product_image}`} alt="img" /></div>
            <div>
                <h1>{details.product_title}</h1>
                <p>{details.price}</p>
                <p>{details.availability == true ? "In Stock" : "Out of Stock"}</p>
                <p>{details.description}</p>
                <ul>
                    {details.specifications.map((element, index) => (
                        <li key={index}>{element}</li>  
                    ))}
                </ul>
                <ProductRating initialRating={details.rating}></ProductRating>
                <div>
                    <button onClick={handleCart}>Add to cart</button>
                    <button onClick={handleWishlist}>wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;