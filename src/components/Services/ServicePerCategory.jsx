import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ServicePerCategory.css';
import '../Home/HomePage.css';
import Navbar from '../General/Navbar';
import Searchbox from '../General/Searchbox';
import Pose10 from '../../asset/HomePage/Pose10.svg';
import { Link, useParams } from 'react-router-dom';
import ServiceListCategory from './ServicesListCategory';
import { getCategory } from '../../redux/actions/category';

const ServicePerCategory = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    return (
        <div>
            <div className='top-container'>
                <div className='Banner1'>
                    <Navbar />
                    <div className='ellipse1'>
                        <img src={Pose10} alt='' className='pose1'></img>
                    </div>
                    <div className='nav-seller2'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <i className='bx bx-chevron-right'></i>
                        <span>Service List</span>
                    </div>
                    <div className='text1-container11'>
                        <div className='text1-11'>It's Nothing But Service</div>
                        <div className='text1-21'>Get The Best IT Service Only In Create IT!</div>
                    </div>
                    <div className='searchbox-cntr1'>
                        <Searchbox />
                    </div>
                </div>
            </div>
            <div className='textcategory-container'>
                <div className='text2-1'>All In One IT Solution</div>
                <div className='text2-2'>We can help with all your needs. Over {category.length} service categories to choose from.</div>
            </div>
            <div className='categorylist1'>
                {category.map((category) => (category.categoryId === +id) ? (
                    <div className='categorybox1 catbox1' key={`id-${category.categoryId}`}>
                        {category.category}
                    </div>
                ) : (
                    <div className='categorybox1 catbox2' key={`id-${category.categoryId}`}>
                        <Link to={`/category/${category.categoryId}`} className='nav-link'>{category.category}</Link>
                    </div>
                ))}
            </div>
            <ServiceListCategory />
        </div>
    )
};

export default ServicePerCategory;