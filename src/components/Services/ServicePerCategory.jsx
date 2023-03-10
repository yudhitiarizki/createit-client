import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ServiceListCategory from './ServicesListCategory';
import ServiceSearchResult from './ServiceSearchResult';

import './ServicePerCategory.css';
import '../Home/HomePage.css';

const ServicePerCategory = ({service}) => {
    const { id } = useParams();

    const category = useSelector(state => state.category);
    const [srchResult, setSrchResult] = useState([]);
    const [searchkey, setSearchkey] = useState('');
    const [srchMsg, setSrchMsg] = useState('');

    useEffect(() => {
        if (!searchkey) {
            setSrchResult([]);
            setSrchMsg('');
            document.getElementById('srchresult2').style.display = 'none';
        }
    }, [searchkey]);

    const regexSearch = useMemo(() => (new RegExp(`.*(${searchkey.toUpperCase()}).*`)), [searchkey]);

    const handleSearch = useCallback(() => {
        if (searchkey) {
            const filtered = service.filter(item => regexSearch.exec(item.title.toUpperCase()));
            setSrchResult(filtered);

            if (filtered.length === 0) {
                setSrchMsg('Data not found.')
            } else {
                setSrchMsg('');
            }

            document.getElementById('srchresult2').style.display = 'flex';
        } else {
            setSrchResult([]);
            setSrchMsg('');
            document.getElementById('srchresult2').style.display = 'none';
        }
    }, [service, searchkey, regexSearch]);

    return (
        <div>
            <div className='top-container'>
                <div className='Banner1'>
                    <div className='ellipse1'>
                        <img src="https://ik.imagekit.io/createit/Pose10.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674640770720" alt={1} loading="lazy" className='pose1'></img>
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
                        <div className="search-container1">
                            <input type="text" placeholder="Search..." value={searchkey} onChange={(event) => { setSearchkey(event.target.value) }} className="search-input1" />
                            <div type="button" className="search-button1" onClick={handleSearch}>Search</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='srchresult2' style={{ 'display': 'none' }} className='srchresult-cntr'>
                <ServiceSearchResult data={srchResult} message={srchMsg} />
            </div>

            <div className='textcategory-container'>
                <div className='text2-1'>All In One IT Solution</div>
                <div className='text2-2'>We can help with all your needs. Over {category.length} service categories to choose from.</div>
            </div>
            <div className='catlist-cntr11'>
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
            </div>
            <ServiceListCategory service={service} />
        </div>
    )
};

export default ServicePerCategory;