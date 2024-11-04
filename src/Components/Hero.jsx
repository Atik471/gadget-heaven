import { useLocation } from "react-router-dom";

const Hero = () => {

    const location = useLocation()

    let heroContent

    if(location.pathname === '/') 
    {
        heroContent = (
            <div className="text-center font-sora">
                <h1 className="text-[3.5rem] leading-[4.5rem] font-extrabold mb-6 max-w-[80%] m-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button>Shop</button>
            </div>
        )
    }
    else if(location.pathname === '/dashboard') 
    {
        heroContent = (
            <div className="text-center font-sora">
                <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex">
                    <button>Cart</button>
                    <button>Wishlist</button>
                </div>
            </div>
        )
    }
    else if(location.pathname === '/statistics') 
    {
        heroContent = (
            <div className="text-center font-sora">
                <h1 className="text-4xl font-bold mb-6">Statistics</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        )
    }
    else if(location.pathname === '/product') 
    {
        heroContent = (
            <div className="text-center font-sora">
                <h1 className="text-4xl font-bold mb-6">Product Details</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        )
    }

    return (
        <div className="bg-primary w-full text-white font-sora flex justify-center items-center p-8">
            {
                heroContent
            }
        </div>
    );
};


export default Hero;