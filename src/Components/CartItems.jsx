import PropTypes from "prop-types";

const CartItems = ({ item }) => {

    const { product_image, product_title, description, price } = item

    return (
        <div className="flex">
            <div>
                <img src={`${product_image}`} alt="" />
            </div>
            <div>
                <h1>{product_title}</h1>
                <p>{description}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

CartItems.propTypes = {
    item: PropTypes.object.isRequired
}

export default CartItems;