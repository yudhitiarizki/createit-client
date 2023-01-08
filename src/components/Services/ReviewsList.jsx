import './ReviewsList.css';
import Star from '../SellerProfile/Star';

const ReviewsList = ({ data }) => {

    const Reviews = data;

    return (
        <div className="review-cntr">
            <div className='review-cntr2'>
                {Reviews.map((item) => (
                    <div key={`key-${item.reviewId}`} className='review-item'>
                        <div className='review-name-star'>
                            <div>{item.Order.User.firstName} {item.Order.User.lastName}</div>
                            <Star star={item.rating} />
                        </div>
                        <div className='review-review'>{item.review}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ReviewsList;