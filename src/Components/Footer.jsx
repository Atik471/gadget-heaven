import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col items-center mb-8">
            <h1 className="font-bold text-2xl mb-4">Gadget Heaven</h1>
            <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>

            <hr className=" border-gray-300 my-8 w-[70%]" />

            <div className="flex justify-between w-[60%] ">
                <div className="text-center">
                    <h2 className="mb-4 font-semibold">Services</h2>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        <Link>Product Support</Link>
                        <Link>Order Tracking</Link>
                        <Link>Shipping & Delivery</Link>
                        <Link>Returns</Link>
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="mb-4 font-semibold">Company</h2>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        <Link>About Us</Link>
                        <Link>Careers</Link>
                        <Link>Contact</Link>
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="mb-4 font-semibold">Legal</h2>
                    <ul className="flex flex-col gap-2 text-gray-500">
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