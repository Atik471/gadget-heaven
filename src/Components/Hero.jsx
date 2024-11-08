import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import banner from "../assets/banner.jpg"

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

    if((location.pathname === '/' || isMatch) && location.pathname != '/dashboard' && location.pathname != '/contact-us' && location.pathname != '/statistics') 
    {
        heroContent = (
            <div className="text-center rounded-xl bg-primary md:pb-[10%]"
            >
                <h1 className="text-[2rem] md:text-[3.5rem] leading-[2.5rem] md:leading-[4.5rem] font-extrabold mb-6  w-[94%] md:max-w-[80%] m-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="max-w-[90%] md:max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to={'/dashboard/cart'}><button className="py-2 px-5 bg-white text-primary rounded-[2rem] font-semibold my-5">Shop Now</button></Link>
                <div className="md:hidden flex w-[100%]  p-1 border-2 border-white rounded-xl bg-white/15">
                        <img src={banner} alt="banner-img" className="rounded-xl"/>
                    </div>
            </div>
        )
    }
    else if(location.pathname === '/dashboard' || location.pathname === '/dashboard/cart' ||location.pathname === '/dashboard/wishlist') 
    {
        heroContent = (
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-4 justify-center my-6">
                    <NavLink to={"/dashboard/cart"} className={"dashboardBtn"}>Cart</NavLink>
                    <NavLink to={"/dashboard/wishlist"} className={"dashboardBtn"}>Wishlist</NavLink>
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
            <div className="text-center mb-[50%] md:mb-[10%]">
                <h1 className="text-4xl font-bold mb-6">Product Details</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        )
    }
    else if(location.pathname === '/contact-us')
    {
        heroContent = (
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="max-w-[70%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        )
    }

    return (
        <div className={`${((location.pathname === '/' || isMatch) && location.pathname != '/contact-us' && location.pathname != '/dashboard' && location.pathname != '/dashboard' && location.pathname != '/statistics') && "rounded-2xl"} bg-primary w-full text-white flex justify-center items-center p-2 py-4 md:p-8`}>
            {
                heroContent
            }
        </div>
    );
};


export default Hero;