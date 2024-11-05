import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col items-center mb-8">
            <h1 className="font-bold text-2xl mb-4">Gadget Heaven</h1>
            <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>

            <div className="flex justify-between">
                <div className="">
                    <h2 className="">Services</h2>
                    <ul className="flex flex-col">
                        <Link>Product Support</Link>
                        <Link>Order Tracking</Link>
                        <Link>Shipping & Delivery</Link>
                        <Link>Returns</Link>
                    </ul>
                </div>
                <div>
                    <h2>Company</h2>
                    <ul className="flex flex-col">
                        <Link>About Us</Link>
                        <Link>Careers</Link>
                        <Link>Contact</Link>
                    </ul>
                </div>
                <div>
                    <h2>Legal</h2>
                    <ul className="flex flex-col">
                        <Link>Terms of Service</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Cookie Policy</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;