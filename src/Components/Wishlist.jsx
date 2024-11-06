import { useContext } from "react";
import CartContext from "../Contexts/CartContext";

const Wishlist = () => {
    const { wishlistItems } = useContext(CartContext)

    return (
        <div>
            <div>
                {wishlistItems.map((element, index) => (
                    <li key={index}>{element.product_title}</li>  
                ))}
            </div>
        </div>
    );
};

export default Wishlist;