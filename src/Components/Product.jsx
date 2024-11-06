import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ pr }) => {

    const {product_id, product_title, price, product_image} = pr

    return (
        <div className="p-5 rounded-lg bg-white text-left flex flex-col">
            <div className="flex-grow">
                <img src={`${product_image}`} alt="product_img" />
            </div>
            <p className="text-lg font-semibold mb-2">{product_title}</p> 
            <p className="text-gray-600 mb-3">Price: {price}k</p> 
            <Link to={`/productDetails/:${product_id}`}><button className="py-2 px-6 rounded-[3rem] border-2  border-[#9236CE] border-b-[#D958AD]">View Details</button></Link>
        </div>
    );
};

Product.propTypes = {
    pr: PropTypes.object.isRequired,
}

export default Product;