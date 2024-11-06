import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { CartProvider } from "../Contexts/CartContext";

const Root = () => {
    const location = useLocation()

    return (
        <div className="flex flex-col min-h-screen font-sora bg-root">
            <CartProvider>
                <Header></Header>
                {location.pathname === "/" ? <Home></Home> : <Outlet></Outlet> } 
                <Footer></Footer>
            </CartProvider>
        </div>
    );
};

export default Root;