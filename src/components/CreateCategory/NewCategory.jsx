import { useState } from 'react';
import '../Services/DetailService.css';
import './NewCategory.css';

const NewCategory = () => {
    const [catImg, setCatImg] = useState('');
    const [category, setCategory] = useState('');

    const uploadFile = () => {
        document.getElementById('real-inputfile3').click();
    };

    const handleFileChange = (event) => {
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
    };

    const handleCreateCtgr = () => {
        // dispatch disini, payload {category, image: catImg}
    }

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
                        <input value={category} onChange={(event) => {setCategory(event.target.value)}} />
                    </div>
                    <div className='newcatform-row'>
                        <div className='newcatform-col1'><div>Category Image</div><span> *</span></div>
                        <div className='newcatform-imginput'>
                            <input type='file' id='real-inputfile3' onChange={handleFileChange} accept="image/*"/>
                            <div className='cstm-imginput3'>
                                <div id='custom-inputtext3' className='thumb2'></div>
                                <div className='custominputimg3-btn' onClick={uploadFile}>
                                    <div className='link-img2'></div>
                                    <div>Upload File</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='createcategory-btn' onClick={handleCreateCtgr}>CREATE</div>
                </div>
            </div>
        </div>
    )
};

export default NewCategory;