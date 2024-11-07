import Navbar from "./Navbar";
import Hero from "./Hero";
import { matchPath, useLocation } from "react-router-dom";
import banner from "../assets/banner.jpg"

const Header = () => {

    const location = useLocation()
    const isMatch = matchPath(
        
        { path: '/:props' },
        location.pathname
    );


    return (
        <div className={`${((location.pathname === '/' || isMatch) && location.pathname != '/dashboard' && location.   pathname != '/statistics') && "w-[96%] mx-auto  my-[2rem] p-2 border-2 border-gray-200 rounded-2xl relative h-full mb-[20%]"}`}>
            <div className={`${((location.pathname === '/' || isMatch) && location.pathname != '/dashboard' && location.   pathname != '/statistics') && " bg-primary rounded-2xl h-full relative" }`}
            >
                <Navbar></Navbar>
                <Hero></Hero>
                
                {((location.pathname === '/' || isMatch) && location.pathname != '/dashboard' && location.   pathname != '/statistics') && 
                    <div className="w-[50%] p-3 border-2 border-white rounded-xl bg-white/15 bottom-0 translate-x-[50%]       translate-y-[70%] absolute">
                        <img src={banner} alt="banner-img" className="rounded-xl"/>
                    </div>
                }                
            </div>
        </div>
    );
};

export default Header;