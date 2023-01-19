import './ReviewsList.css';
import Star from '../SellerProfile/Star';

const ReviewsList = ({ data }) => {

    const Reviews = data;

    return (
        <div className="review-cntr">
            <div className='review-cntr2'>
                {Reviews.map(({ reviewId, Order, rating, review }) => (
                    <div key={`key-${reviewId}`} className='review-item'>
                        <div className='review-name-star'>
                            <div>{Order.User.firstName} {Order.User.lastName}</div>
                            <Star star={rating} className={'star-icon'} />
                        </div>
                        <div className='review-review'>{review}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ReviewsList;