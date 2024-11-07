import { Outlet, useLocation, useParams } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "../Contexts/CartContext";
import Modal from "./Modal";
import { useEffect } from "react";

const Root = () => {
    const location = useLocation()
    const param = useParams()

    useEffect(() => {
        switch (location.pathname) {
          case '/':
            document.title = 'Home | Gadget Heaven';
            break;
        case `/${param['props']}`:
            document.title = `${param['props'].slice(1)} | Gadget Heaven`;
            break;
          case '/dashboard/cart':
            document.title = 'Dashboard | Gadget Heaven';
            break;
          case '/dashboard/wishlist':
            document.title = 'Dashboard | Gadget Heaven';
            break;
          case '/statistics':
            document.title = 'Statistics | Gadget Heaven';
            break;
          case `/productDetails/${param.id}`:
                document.title = 'Details | Gadget Heaven';
                break;
          default:
            document.title = 'Gadget Heaven';
        }
      }, [location]);

    return (
        <div className="flex flex-col min-h-screen font-sora bg-root">
            
            <CartProvider>
                <Modal></Modal>
                <ToastContainer />
                <Header></Header>
                {location.pathname === "/" ? <Home></Home> : <Outlet></Outlet> } 
                <Footer></Footer>
            </CartProvider>
        </div>
    );
};

export default Root;