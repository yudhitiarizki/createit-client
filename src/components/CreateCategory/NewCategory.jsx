import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { createCategory, getCategory } from '../../redux/actions/category';

import '../Services/DetailService.css';
import './NewCategory.css';
import loader from '../../asset/Login/loader.gif';

const NewCategory = () => {
    const dispatch = useDispatch();

    const { role, isLoggedIn } = useSelector(state => state.auth);

    const [catImg, setCatImg] = useState('');
    const [category, setCategory] = useState('');
    const [description, setdescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const uploadFile = useCallback(() => {
        document.getElementById('real-inputfile3').click();
    }, []);

    const handleFileChange = useCallback((event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            document.getElementById('custom-inputtext3').innerHTML = selectedFile.name;
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const image = reader.result;
                setCatImg(image);
            }
        };
    }, []);

    const handleCreateCtgr = useCallback(() => {
        setIsLoading(true);
        dispatch(createCategory(category, description, catImg)).then(() => {
            dispatch(getCategory());
            setIsLoading(false);
            setCatImg('');
            setCategory('');
            setdescription('');
            document.getElementById('custom-inputtext3').innerHTML = '';
        });
    }, [category, description, catImg, dispatch]);

    if (isLoggedIn) {
        if (role !== 3) { return <Navigate to='/' /> }
    } else { return <Navigate to='/' /> }

    return (
        <div className='newcat-cntr'>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order In Progress</div>
            </div>
            <div className='form-container'>
                <div className='newcat-form'>
                    <div className='newcatform-title'>CREATE CATEGORY</div>
                    <div className='newcatform-row'>
                        <div className='newcatform-col1'><div>Category Name</div><span> *</span></div>
                        <input value={category} onChange={(event) => { setCategory(event.target.value) }} />
                    </div>
                    <div className='newcatform-row'>
                        <div className='newcatform-col1'><div>Description</div><span> *</span></div>
                        <input value={description} onChange={(event) => { setdescription(event.target.value) }} />
                    </div>
                    <div className='newcatform-row'>
                        <div className='newcatform-col1'><div>Category Image</div><span> *</span></div>
                        <div className='newcatform-imginput'>
                            <input type='file' id='real-inputfile3' onChange={handleFileChange} accept="image/*" />
                            <div className='cstm-imginput3'>
                                <div id='custom-inputtext3' className='thumb2'></div>
                                <div className='custominputimg3-btn' onClick={uploadFile}>
                                    <div className='link-img2'></div>
                                    <div>Upload File</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isLoading ?
                        <img src={loader} alt={1} className='Loading' loading='lazy'></img>
                        :
                        <div className='createcategory-btn' onClick={handleCreateCtgr}>CREATE</div>
                    }
                </div>
            </div>
        </div>
    )
};

export default NewCategory;