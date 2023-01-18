import React from 'react';
import { useSelector } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

import "./CategoryListHome.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const owlCarousel = (
    containerClass,
    imgContainerClass,
    imgClass,
    categoryClass,
    margin,
    noOfItems,
    category
) => {
    return (
        <div className={containerClass}>
            <OwlCarousel
                margin={margin}
                dots={false}
                nav navText={[
                    "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvtlMENwjAQBGc7oBMoAUqgElogHdEBlEA6oYMgS0GyjJNbgvNLno41c7f2Waz8aWU+myBM2I5oGIYdcJHUhdRsgyUY4XfgAHSSrq4kFBTwHjhKejUR/AtPRUx20AI+KWgFrwoKuBs1kqppfC2Oggewt+kpa1eQoIXkCZx+uTl5YdEhfzpZLJmdgxaduIO2uJNQUDmTs6SbewEsQSZJz4QNn51kt8Jon91BBJr6vwnC5N7IPEoZlO97kgAAAABJRU5ErkJggg=='/>",
                    "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEvt1MERgjAUhOH/dUAnWgJ0YEdSgp1YgpQAndjBOnE4MAyabJQbnDP7zdu8EOz8xc75HEC2YbsiST1wi4hnNh28O5jDr8AIdCWINYGkBhiAUyliAakSF7EBF6kCHOQjIEklW7I4s3nx/wQmoF1v1q8VPYAzsBmepqsC5k3KhlcBTrgNuOE1wAW4f+t8vXn2HUhKyFDyH7InMN/F+7g9gYscQLaxF0YRUhkf9XfKAAAAAElFTkSuQmCC'/>"
                ]}
                items={noOfItems}
                loop
                autoplay autoplayHoverPause
                autoplaySpeed={1}
                className={['owl-prev', 'owl-next']}
            >
                {category.map(({ categoryId, image, category }) => (
                    <div className={`item ${imgContainerClass}`} key={`id-${categoryId}`}>
                        <img src={image} alt={1} className={imgClass}></img>
                        <Link to={`/category/${categoryId}`} className={categoryClass}><span>{category}</span></Link>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    )
}

const CategoryListHome = () => {
    const category = useSelector(state => state.category);

    return (
        <div>
            {owlCarousel(
                "owlcarousel-container",
                "carouselimg-container",
                "carouselimg",
                "categoryname-carousel",
                20,
                3,
                category
            )}

            {owlCarousel(
                "owlcarousel-container11",
                "carouselimg-container11",
                "carouselimg11",
                "categoryname-carousel11",
                15,
                2,
                category
            )}

            {owlCarousel(
                "owlcarousel-container22",
                "carouselimg-container22",
                "carouselimg22",
                "categoryname-carousel22",
                0,
                1,
                category
            )}
        </div>
    )
}

export default CategoryListHome;