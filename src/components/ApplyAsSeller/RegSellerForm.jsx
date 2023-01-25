import React, { useState, useCallback } from 'react';

import './ApplySeller.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import link from '../../asset/Seller/link.png';

const RegSellerForm = ({handleSubmit}) => {
    const [photoProfile, setPhotoProfile] = useState();
    const [description, setDescription] = useState('');
    const [noRekening, setNoRekening] = useState('');
    const [bankName, setBankName] = useState('');
    const [cardHolder, setCardHolder] = useState('');

    const uploadFile = useCallback(() => {
        document.getElementById('real-inputfile1').click();
    }, []);

    const handleFileChange = useCallback((event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            document.getElementById('custom-inputtext1').innerHTML = selectedFile.name;

            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const filedata = reader.result;
                setPhotoProfile(filedata);
            }
        }
    }, []);

    const handleSubmitSeller = useCallback(() => {
        handleSubmit(photoProfile, description, noRekening, bankName, cardHolder);
    }, [handleSubmit, photoProfile, description, noRekening, bankName, cardHolder]);

    return (
        <div className='applyseller-formcntr'>
            <div className='text6-5'>How To Be A Seller In Create IT?</div>
            <div className='applyseller-formcntr2'>
                <div className='text6-6'>Sign up as a seller here</div>
                <div className='sellerreg-inputcntr'>
                    <label>Description <span>*</span></label>
                    <textarea rows={5} value={description} className='inputfield-1' onChange={(event) => { setDescription(event.target.value) }} placeholder='Describe the skills you have here...'/>
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Card Holder <span>*</span></label>
                    <input type='text' value={cardHolder} className='inputfield-1' onChange={(event) => { setCardHolder(event.target.value) }} />
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Bank Name <span>*</span></label>
                    <input type='text' value={bankName} className='inputfield-1' onChange={(event) => { setBankName(event.target.value) }} />
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Bank Account Number <span>*</span></label>
                    <input type='text' value={noRekening} className='inputfield-1' onChange={(event) => { setNoRekening(event.target.value) }} />
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Photo Profile <span>*</span></label>
                    <div className='inputphotoseller'>
                        <input type='file' id='real-inputfile1' accept="image/*" onChange={handleFileChange} />
                        <div className='custom-fileinput1'>
                            <label className='custominputfile1-thumb' id='custom-inputtext1'></label>
                            <div id='custom-inputfile1' className='custominputfil1-btn' onClick={uploadFile}>
                                <img src={link} alt=''></img>
                                <span>Upload File</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='submit-btn1' onClick={handleSubmitSeller}>Submit</button>
            </div>
        </div>
    )
};

export default RegSellerForm;