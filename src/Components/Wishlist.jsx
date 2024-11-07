import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import WishlistItems from "./WishlistItems";

const Wishlist = () => {
    const { wishlistItems } = useContext(CartContext)

    return (
        <div className="w-[80%] m-auto my-[4rem]">
            <h1 className="text-left text-xl font-bold mb-[2rem]">Wishlist</h1>
            <div className="flex flex-col gap-6">
                {wishlistItems.map((element, index) => (
                    <WishlistItems key={index} item={element}>{element.product_title}</WishlistItems>  
                ))}
            </div>
        </div>
    );
};

export default Wishlist;