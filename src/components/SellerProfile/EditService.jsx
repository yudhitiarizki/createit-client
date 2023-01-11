import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Modal.css';

const EditService = () => {
    
    
    return (
        <div className="modal fade" id="EditService" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                    <div className="title-modal">
                        <h4>Edit Service</h4>
                    </div>
                    <div className="form-input">
                        <label htmlFor="Category">Category <span>*</span></label>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Select Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    
                    <div className="form-input">
                        <label htmlFor="servicename">Service Name <span>*</span></label>
                        <input type="text" id='servicename'/>
                    </div>

                    <div className="form-input">
                        <label htmlFor="description">Descriptions <span>*</span></label>
                        <textarea name="description" id="" cols="20" rows="3"></textarea>
                    </div>
                    <div className="form-input">
                        <label htmlFor="file-input">Image </label>
                        <input type="file" id="file-input" className="form-file" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="create-service">Create</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EditService;