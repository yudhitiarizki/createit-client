import React, { useCallback, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Modal.css';
import { editProfile } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { getMySeller } from "../../redux/actions/seller";

const EditProfile = ({data}) => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [description, setDescription] = useState('');
    const [photoProfile, setPhoto] = useState({photoProfile: '', update: false});
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        setFirstName(data.firstName);
        setLastname(data.lastName);
        setDescription(data.description);
        const photo = {photoProfile: data.photoProfile, update: false}
        setPhoto(photo)
    }, [data])

    const handleFileChange = useCallback((event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {

            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const filedata = reader.result;
                setPhoto({photoProfile: filedata, update: true});
            }
        }
    }, [photoProfile, setPhoto]);

    console.log(data)

    const onSubmit = useCallback(() => {
        if(photoProfile.update){
            dispatch(editProfile(firstName, lastName, description, photoProfile.photoProfile)).then(() => {
                dispatch(getMySeller(user.seller.sellerId));
            })
        } else {
            dispatch(editProfile(firstName, lastName, description)).then(() => {
                dispatch(getMySeller(user.seller.sellerId));
            })
        }
        
    }, [firstName, lastName, description, photoProfile])

    return (
    <div className="modal fade" id="EditProfile" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-body">
                <div className="title-modal">
                    <h4>Edit Profile</h4>
                </div>
                
                <div className="form-input">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' value={firstName} onChange={event => setFirstName(event.target.value)}/>
                </div>

                <div className="form-input">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' value={lastName} onChange={event => setLastname(event.target.value)}/>
                </div>

                <div className="form-input">
                    <label htmlFor="description">Descriptions</label>
                    <textarea name="description" id="" cols="20" rows="3" value={description} onChange={event => setDescription(event.target.value)}></textarea>
                </div>

                <div className="form-input">
                    <label htmlFor="file-input">Photo Profile </label>
                    <img src={photoProfile.photoProfile} alt={'image-1'}></img>
                    <input type="file" id="file-input" className="form-file" onChange={handleFileChange}/>
                </div>

                <div className="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="create-service" onClick={onSubmit}>Save</button>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}

export default EditProfile;