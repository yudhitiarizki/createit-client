import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai";
import './Star.css';

const Star = ({ star }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    star >= index + 1 ? (
                        <FaStar className='icon' />
                    ) : star >= number ? (
                        <FaStarHalfAlt className='icon' />
                    ) : (
                        <AiOutlineStar className='icon icon-empty' />
                    )
                }
            </span>
        )

    })
    return (
        <div>
            <div className="icon-style">
                {ratingStar}
                <p>{star}/5</p>
            </div>
        </div>
    )

}

export default Star;