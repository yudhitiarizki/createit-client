import React from 'react';
import NewCategory from '../components/CreateCategory/NewCategory';
import Footer from '../components/General/Footer';
import '../components/CreateCategory/NewCategory.css';
import '../components/Services/DetailService.css';

const CreateCategory = () => {
    return (
        <div>
            <div className='newcat-container'>
                <NewCategory />
                <Footer />
            </div>
        </div>
    )
}

export default CreateCategory;