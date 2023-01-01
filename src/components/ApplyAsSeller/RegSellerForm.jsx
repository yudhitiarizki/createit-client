import './ApplySeller.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import link from '../../asset/Seller/link.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegSellerForm = () => {
    const { user } = useSelector(state => state.auth);
    // uncomment kalau login udah bisa
    // const token = user.token;

    const [sellerName, setSellerName] = useState('');
    const [photoProfile, setPhotoProfile] = useState();
    const [description, setDescription] = useState('');
    const [noRekening, setNoRekening] = useState('');
    const [bankName, setBankName] = useState('');
    const [cardHolder, setCardHolder] = useState('');

    const uploadFile = () => {
        document.getElementById('real-inputfile1').click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0].name;
        if (selectedFile) {
            document.getElementById('custom-inputtext1').innerHTML = selectedFile;

            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const filedata = reader.result;
                setPhotoProfile(filedata);
            }
        }
    };

    const handleSubmit = () => {
        // uncomment kalau login udah bisa
        // axios.post(
        //     "https://hot-wheat-salesman.glitch.me/regseller",
        //     { 
        //         userId: user.userId,
        //         sellerName,
        //         photoProfile,
        //         description,
        //         noRekening,
        //         bankName,
        //         cardHolder
        //     },
        //     { headers: { Authorization: `Bearer ${token}` } }
        // ).then((response) => {
        //     toast.success(response.data.message, {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        //     setSellerName('');
        //     setPhotoProfile();
        //     setDescription('');
        //     setNoRekening('');
        //     setBankName('');
        //     setCardHolder('');
        // }).catch((error) => {
        //     toast.error(error.response.data.message, {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // })
    };

    return (
        <div className='applyseller-formcntr'>
            <div className='text6-5'>How To Be A Seller In Create IT?</div>
            <div className='applyseller-formcntr2'>
                <div className='text6-6'>Sign up as a seller here</div>
                <div className='sellerreg-inputcntr'>
                    <label>Seller/Shop Name <span>*</span></label>
                    <input type='text' className='inputfield-1' onChange={(event) => { setSellerName(event.target.value) }} />
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Description <span>*</span></label>
                    <textarea rows={5} className='inputfield-1' onChange={(event) => { setDescription(event.target.value) }} />
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Card Holder <span>*</span></label>
                    <input type='text' className='inputfield-1' onChange={(event) => { setCardHolder(event.target.value) }} />
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Bank Name <span>*</span></label>
                    <input type='text' className='inputfield-1' onChange={(event) => { setBankName(event.target.value) }} />
                </div>
                <div className='sellerreg-inputcntr'>
                    <label>Bank Account Number <span>*</span></label>
                    <input type='text' className='inputfield-1' onChange={(event) => { setNoRekening(event.target.value) }} />
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
                <button className='submit-btn1' onClick={handleSubmit}>Submit</button>
            </div>
            <ToastContainer />
        </div>
    )
};

export default RegSellerForm;