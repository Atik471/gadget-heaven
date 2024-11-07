import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "../Contexts/CartContext";
import Modal from "./Modal";

const Root = () => {
    const location = useLocation()

    return (
        <div className="flex flex-col min-h-screen font-sora bg-root">
            <Modal></Modal>
            <CartProvider>
                <ToastContainer />
                <Header></Header>
                {location.pathname === "/" ? <Home></Home> : <Outlet></Outlet> } 
                <Footer></Footer>
            </CartProvider>
        </div>
    );
};

export default Root;