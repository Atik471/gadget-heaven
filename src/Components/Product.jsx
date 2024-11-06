import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ pr }) => {

    const {product_id, product_title, price, product_image} = pr

    return (
        <div className="p-3 rounded-lg bg-white text-left">
            <img src={`${product_image}`} alt="product_img" />
            <p>{product_title}</p> 
            <p>{price}</p> 
            <Link to={`/productDetails/:${product_id}`}>Details</Link>
        </div>
    );
};

Product.propTypes = {
    pr: PropTypes.object.isRequired,
}

export default Product;