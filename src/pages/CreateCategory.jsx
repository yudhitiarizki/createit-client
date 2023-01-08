import React from 'react';
import NewCategory from '../components/CreateCategory/NewCategory';
import Footer from '../components/General/Footer';
import Navbar from '../components/General/Navbar';
import '../components/CreateCategory/NewCategory.css';
import '../components/Services/DetailService.css';

const CreateCategory = () => {
    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className='newcat-container'>
                <NewCategory />
                <Footer />
            </div>
        </div>
    )
}

export default CreateCategory;