import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

const ProductRating = ({ rating }) => {

    return (
        <div>
            <p className="font-semibold text-lg mt-3">Rating: <span className='text-sm p-1 rounded-md bg-gray-200'>{rating}</span></p>
            <ReactStars
                count={5}
                edit={false}
                size={24}
                isHalf={true}
                value={rating}
                activeColor="#ffd700"
            />
            
        </div>
    );
};

ProductRating.propTypes = {
    rating: PropTypes.number.isRequired
}

export default ProductRating;
