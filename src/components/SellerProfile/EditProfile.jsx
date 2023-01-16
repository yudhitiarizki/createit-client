import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Modal.css';

const EditProfile = () => {
    return (
    <div class="modal fade" id="EditProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
                <div className="title-modal">
                    <h4>Edit Profile</h4>
                </div>
                
                <div className="form-input">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName'/>
                </div>

                <div className="form-input">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName'/>
                </div>

                <div className="form-input">
                    <label htmlFor="description">Descriptions</label>
                    <textarea name="description" id="" cols="20" rows="3"></textarea>
                </div>

                <div className="form-input">
                    <label htmlFor="file-input">Photo Profile </label>
                    <input type="file" id="file-input" className="form-file" />
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="create-service">Save</button>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}

export default EditProfile;