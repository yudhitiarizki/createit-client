import "./CategoryListHome.css";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Rectangle9 from '../../asset/ImgDummy/Rectangle9.png';
import Rectangle10 from '../../asset/ImgDummy/Rectangle10.png';
import Rectangle11 from '../../asset/ImgDummy/Rectangle11.png';

const CategoryListHome = () => {
    // ini nanti ganti pakai axios get "/category" dari redux
    const categoryList = [
        {
            "categoryId": 1,
            "category": "Android Developer",
            "image": Rectangle9
        },
        {
            "categoryId": 2,
            "category": "AR VR Developer",
            "image": Rectangle10
        },
        {
            "categoryId": 3,
            "category": "Game Developer",
            "image": Rectangle11
        },
        {
            "categoryId": 4,
            "category": "iOS Developer",
            "image": Rectangle9
        },
        {
            "categoryId": 5,
            "category": "Website Developer",
            "image": Rectangle10
        }
    ];

    return (
        <div className="owlcarousel-container">
            <OwlCarousel
                margin={30}
                dots={false}
                nav navText={[
                    "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvtlMENwjAQBGc7oBMoAUqgElogHdEBlEA6oYMgS0GyjJNbgvNLno41c7f2Waz8aWU+myBM2I5oGIYdcJHUhdRsgyUY4XfgAHSSrq4kFBTwHjhKejUR/AtPRUx20AI+KWgFrwoKuBs1kqppfC2Oggewt+kpa1eQoIXkCZx+uTl5YdEhfzpZLJmdgxaduIO2uJNQUDmTs6SbewEsQSZJz4QNn51kt8Jon91BBJr6vwnC5N7IPEoZlO97kgAAAABJRU5ErkJggg=='/>",
                    "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEvt1MERgjAUhOH/dUAnWgJ0YEdSgp1YgpQAndjBOnE4MAyabJQbnDP7zdu8EOz8xc75HEC2YbsiST1wi4hnNh28O5jDr8AIdCWINYGkBhiAUyliAakSF7EBF6kCHOQjIEklW7I4s3nx/wQmoF1v1q8VPYAzsBmepqsC5k3KhlcBTrgNuOE1wAW4f+t8vXn2HUhKyFDyH7InMN/F+7g9gYscQLaxF0YRUhkf9XfKAAAAAElFTkSuQmCC'/>"
                ]}
                items={3}
                loop
                autoplay autoplayHoverPause
                autoplaySpeed={1}
                className={['owl-prev', 'owl-next']}
            >
                {categoryList.map((category) => (
                    <div className='item carouselimg-container' key={`id-${category.categoryId}`}>
                        <img src={category.image} alt='' className="carouselimg"></img>
                        <Link to={`/category/${category.categoryId}`} className="categoryname-carousel"><span>{category.category}</span></Link>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    )
}

export default CategoryListHome;