import { matchPath, NavLink, useLocation } from "react-router-dom";

const Hero = () => {

    const location = useLocation()

    let heroContent

    const isMatch = matchPath(
        
        { path: '/:props' },
        location.pathname
    );

    const isProductMatch = matchPath(
        { path: '/productDetails/:props' },
        location.pathname
    );

    if((location.pathname === '/' || isMatch) && location.pathname != '/dashboard' && location.pathname != '/statistics') 
    {
        heroContent = (
            <div className="text-center">
                <h1 className="text-[3.5rem] leading-[4.5rem] font-extrabold mb-6 max-w-[80%] m-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button>Shop</button>
            </div>
        )
    }
    else if(location.pathname === '/dashboard' || location.pathname === '/dashboard/cart' ||location.pathname === '/dashboard/wishlist') 
    {
        heroContent = (
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex">
                    <NavLink to={"/dashboard/cart"}>Cart</NavLink>
                    <NavLink to={"/dashboard/wishlist"}>Wishlist</NavLink>
                </div>
            </div>
        )
    }
    else if(location.pathname === '/statistics') 
    {
        heroContent = (
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Statistics</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        )
    }
    else if(isProductMatch) 
    {
        heroContent = (
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Product Details</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        )
    }

    return (
        <div className="bg-primary w-full text-white flex justify-center items-center p-8">
            {
                heroContent
            }
        </div>
    );
};


export default Hero;