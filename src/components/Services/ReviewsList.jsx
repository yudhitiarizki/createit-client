import './ReviewsList.css';

const ReviewsList = ({ slug }) => {
    // data dummy
    const Reviews = [
        {
            reviewId: 1,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 5
        },
        {
            reviewId: 2,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 4
        },
        {
            reviewId: 3,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 5
        },
        {
            reviewId: 4,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 5
        },
        {
            reviewId: 5,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 5
        },
        {
            reviewId: 6,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 4
        },
        {
            reviewId: 7,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 5
        },
        {
            reviewId: 8,
            username: 'Lee Felix',
            review: 'Nice color & style, Good Job! \n Thank You',
            rating: 5
        },
        {
            reviewId: 9,
            username: 'Lee Felix',
            review: `Nice color & style, Good Job! \n Thank You`,
            rating: 5
        }
    ];

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