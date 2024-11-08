import { matchPath, NavLink, useLocation } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import CartContext from "../Contexts/CartContext";

const Navbar = () => {
    const location = useLocation()
    const { cartItems, wishlistItems } = useContext(CartContext)
    const isMatch = matchPath(
        
        { path: '/:props' },
        location.pathname
    );

    return (
        <div>
            <div className={`${((location.pathname === '/' || isMatch) && location.pathname != '/dashboard' && location.pathname != '/contact-us'  && location.pathname != '/statistics') ? "max-w-[84%]" : "max-w-[90%]"} flex justify-between items-center py-6 mx-auto`}>
                <Link to={"/"}><h1 className={`${((location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname != '/dashboard' && location.pathname != '/statistics') && "text-white"} font-bold text-2xl`}>Gadget Heaven</h1></Link>
                
                <ul className="flex gap-8 items-center">
                    <NavLink to={"/"} className={`${(location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' && 'bg-white px-2 py-1 rounded-md'} text-gray-500 font-semibold`}
                    style={{
                        color: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? '#9538E2' : ''
                      }}>Home</NavLink>
                    <NavLink to={"/statistics"} className={"text-gray-500 font-semibold"}
                    style={{
                        color: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}>Statistics</NavLink>
                    <NavLink to={"/dashboard/cart"} className={"text-gray-500 font-semibold"}
                    style={{
                        color: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}>Dashboard</NavLink>
                    <NavLink to={"/contact-us"} className={"text-gray-500 font-semibold"}
                    style={{
                        color: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}>Contact Us</NavLink>
                </ul>
                <div className="flex gap-4">
                  <div className="relative">
                      <BsCart3 className="text-4xl p-2 border-2 rounded-full hover:border-slate-400 transition-all duration-300" style={{
                        backgroundColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}></BsCart3>
                      <span className="absolute -top-2 -right-1 text-[11px] bg-primary border-[1px] w-4 text-center text-white rounded-full" style={{
                        borderColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us' && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}>{cartItems.length}</span>
                  </div>
                    
                    <div className="relative">
                        <BiHeart className="text-4xl p-2 border-2 rounded-full hover:border-slate-400 transition-all duration-300 relative"
                        style={{
                            backgroundColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                          }}></BiHeart>
                        <span className="absolute -top-2 -right-1 text-[11px] bg-primary border-[1px] w-4 text-center text-white rounded-full" style={{
                        borderColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}>{wishlistItems.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;