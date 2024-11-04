import { NavLink } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="font-sora">
            <div className="flex justify-between items-center max-w-[84%] py-6 mx-auto">
                <Link to={"/"}><h1 className="font-bold text-2xl">Gadget Heaven</h1></Link>
                
                <ul className="flex gap-8">
                    <NavLink to={"/"} className={"text-gray-500 font-semibold"}>Home</NavLink>
                    <NavLink to={"/statistics"} className={"text-gray-500 font-semibold"}>Statistics</NavLink>
                    <NavLink to={"/dashboard"} className={"text-gray-500 font-semibold"}>Dashboard</NavLink>
                </ul>
                <div className="flex gap-4">
                    <BsCart3 className="text-4xl p-2 border-2 rounded-full hover:border-slate-400 transition-all duration-300"></BsCart3>
                    <div className="relative">
                        <BiHeart className="text-4xl p-2 border-2 rounded-full hover:border-slate-400 transition-all duration-300 relative"></BiHeart>
                        <span className="absolute -top-2 -right-1 text-[11px] bg-primary w-4 text-center text-white rounded-full">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;