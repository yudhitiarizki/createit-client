import React from 'react';
import './SomethingWrong.css';

const SomethingWrong = () => {
    return (
        <div className='smtngwrong-cntr'>
            <div className='smtngwrong-icon'><i className='bx bxs-error-circle' ></i></div>
            <div className='smtngwrong-oops'>Oops!</div>
            <div className='smtngwrong-msg'>Something Went Wrong</div>
            <div className='smtngwrong-tips'>Try refreshing the page or check your internet connection.</div>
            <div className='smtngwrong-tips'>If the problem continue, please try again later.</div>
        </div>
    )
}

export default SomethingWrong;