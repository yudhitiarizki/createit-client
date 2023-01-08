import './ReviewsList.css';

const ReviewsList = ({ data }) => {
    
    const Reviews = data;

    return (
        <div className="review-cntr">
            <div className='review-cntr2'>
                {Reviews.map((item) => (
                    <div key={`key-${item.reviewId}`} className='review-item'>
                        <div className='review-name-star'>
                            <div>{item.username}</div>
                            {(item.rating === 5) ? (
                                <div>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                            ) : (
                                (item.rating === 4) ? (
                                    <div>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                ) : (
                                    (item.rating === 3) ? (
                                        <div>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                    ) : (
                                        (item.rating === 2) ? (
                                            <div>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        ) : (
                                            <div>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        )
                                    )
                                )
                            )}
                        </div>
                        <div className='review-review'>{item.review}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ReviewsList;