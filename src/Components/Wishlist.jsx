import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import WishlistItems from "./WishlistItems";
import { TbMoodEmpty } from "react-icons/tb";

const Wishlist = () => {
    const { wishlistItems } = useContext(CartContext)

    return (
        <div className="w-[90%] md:w-[80%] m-auto my-[4rem]">
            <h1 className="text-left text-lg md:text-xl font-bold mb-[1.3rem] md:mb-[2rem]">Wishlist</h1>
            <div className="flex flex-col gap-6 my-8">
                {wishlistItems.map((element, index) => (
                    <WishlistItems key={index} item={element}>{element.product_title}</WishlistItems>  
                ))}
            </div>
            {
                wishlistItems.length == 0 && 
                <div className="text-center mt-[1rem] md:mt-[5rem] mb-[5rem] md:mb-[8rem]">
                    <TbMoodEmpty className="mx-auto text-[4rem] md:text-[6rem] font-extrabold text-red-600 mb-[1rem] md:mb-[2rem]"></TbMoodEmpty>
                    <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-red-500">No products added here</h1>
                </div>
            }
        </div>
    );
};

export default Wishlist;