import { matchPath, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../Contexts/CartContext";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const menuRef = useRef(null);
    const location = useLocation()
    const navigate = useNavigate()
    const { cartItems, wishlistItems } = useContext(CartContext)
    const isMatch = matchPath(
        
        { path: '/:props' },
        location.pathname
    );

    const handleCart = () => {
      navigate('/dashboard/cart')
    }
    const handleWishlist = () => {
      navigate('/dashboard/wishlist')
    }
    const handleMobileMenu = () => {
      setMobileMenu(!mobileMenu)
    } 

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMobileMenu(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
        <div>
            <div className={`${((location.pathname === '/' || isMatch) && location.pathname != '/dashboard' && location.pathname != '/contact-us'  && location.pathname != '/statistics') ? "max-w-[92%] md:max-w-[84%]" : "max-w-[90%]"} flex justify-between items-center py-6 mx-auto`}>
                <Link to={"/"}><h1 className={`${((location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname != '/dashboard' && location.pathname != '/statistics') && "text-white"} font-bold md:text-2xl text-xl`}>Gadget Heaven</h1></Link>
                
                <ul className="hidden md:flex gap-8 items-center">
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
                      <BsCart3 onClick={handleCart} className="cursor-pointer text-2xl md:text-4xl p-[4px] md:p-2 border-2 rounded-full hover:border-slate-400 transition-all duration-300" style={{
                        backgroundColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}></BsCart3>
                      <span className="absolute -top-2 -right-1 text-[11px] bg-primary border-[1px] w-4 text-center text-white rounded-full" style={{
                        borderColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us' && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}>{cartItems.length}</span>
                  </div>
                    
                    <div className="relative">
                        <BiHeart onClick={handleWishlist} className=" cursor-pointer text-2xl md:text-4xl p-[4px] md:p-2 border-2 rounded-full hover:border-slate-400 transition-all duration-300 relative"
                        style={{
                            backgroundColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                          }}></BiHeart>
                        <span className="absolute -top-2 -right-1 text-[11px] bg-primary border-[1px] w-4 text-center text-white rounded-full" style={{
                        borderColor: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                      }}>{wishlistItems.length}</span>
                    </div>
                </div>

                <div className="relative" ref={menuRef}>
                  <BiMenu onClick={handleMobileMenu} className="text-primary font-bold inline-block text-3xl"
                  style={{
                    color: (location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' ? 'white' : ''
                  }}></BiMenu>
                  <ul className={`mobilemenu ${mobileMenu ? "flex" : "hidden"} flex-col gap-8 items-center absolute right-4 bg-slate-800 w-[80vw] p-4 rounded-lg`}>
                    <NavLink to={"/"} onClick={handleMobileMenu} className={`${(location.pathname === '/' || isMatch) && location.pathname != '/contact-us'  && location.pathname !== '/dashboard' && location.pathname !== '/statistics' && 'bg-white px-2 py-1 rounded-md'} text-gray-500 font-semibold`}
                   >Home</NavLink>
                    <NavLink to={"/statistics"} onClick={handleMobileMenu} className={"text-gray-500 font-semibold"}
                   >Statistics</NavLink>
                    <NavLink to={"/dashboard/cart"} onClick={handleMobileMenu} className={"text-gray-500 font-semibold"}
                    >Dashboard</NavLink>
                    <NavLink to={"/contact-us"} onClick={handleMobileMenu} className={"text-gray-500 font-semibold"}
                   >Contact Us</NavLink>
                  </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;