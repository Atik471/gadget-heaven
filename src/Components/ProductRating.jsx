import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

const ProductRating = ({ initialRating }) => {
    const [rating, setRating] = useState(initialRating);

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    return (
        <div>
            <p>Rating: {rating}</p>
            <ReactStars
                count={5}               
                onChange={ratingChanged}
                size={24}                  
                isHalf={true}              
                value={rating}             
                activeColor="#ffd700"      
            />
        </div>
    );
};

ProductRating.propTypes = {
    initialRating: PropTypes.number.isRequired
}

export default ProductRating;
