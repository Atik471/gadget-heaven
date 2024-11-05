import PropTypes from "prop-types";

const Product = ({ pr }) => {

    const {product_title, price, product_image} = pr

    return (
        <div className="p-3 rounded-lg bg-white text-left">
            <img src={`${product_image}`} alt="product_img" />
            <p>{product_title}</p> 
            <p>{price}</p> 
            <button>Details</button>
        </div>
    );
};

Product.propTypes = {
    pr: PropTypes.object.isRequired,
}

export default Product;