import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Modal.css';
import { useDispatch, useSelector } from "react-redux";

import { createService, getMyService } from "../../redux/actions/service";
import { sendMessage } from '../../redux/actions/message';
import loader from '../../asset/Login/loader.gif';

const AddService = () => {
    const dispatch = useDispatch();

    const category = useSelector(state => state.category);

    const [isLoading, setIsLoading] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [categoryId, setcategory] = useState('');
    const [imagesSend, setImages] = useState([
        { id: 1, file: null },
        { id: 2, file: null },
        { id: 3, file: null },
        { id: 4, file: null },
    ]);

    const handleChange = (id) => (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const file = reader.result;
                setImages(
                    imagesSend.map((image) => {
                        if (image.id === id) {
                            return { ...image, file };
                        }
                        return image;
                    })
                );
            }
        }

    };

    const submit = () => {
        const filter = imagesSend.filter(img => img.file !== null)
        const image = filter.map((image) => {
            return image.file
        })
        setIsLoading(true);
        dispatch(createService(categoryId, title, description, image))
            .then(() => {
                setIsLoading(false);
                dispatch(getMyService());
                sendMessage('success', 'Please create a package first on service detail page.')
            })
            .catch(() => {
                setIsLoading(false);
            })
    }

    return (
        <div class="modal fade" id="AddService" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className="title-modal">
                            <h4>Create New Service</h4>
                        </div>
                        <div className="form-input">
                            <label htmlFor="Category">Category <span>*</span></label>
                            {category.length < 1 ? (
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Category not Found</option>
                                </select>
                            ) : (
                                <select class="form-select" aria-label="Default select example" onChange={event => setcategory(event.target.value)}>
                                    <option selected>Select Category</option>
                                    {
                                        category.map(cat => {
                                            return <option value={cat.categoryId}>{cat.category}</option>
                                        })
                                    }
                                </select>
                            )}
                        </div>

                        <div className="form-input">
                            <label htmlFor="servicename">Service Name <span>*</span></label>
                            <input type="text" id='servicename' value={title} onChange={event => settitle(event.target.value)} />
                        </div>

                        <div className="form-input">
                            <label htmlFor="description">Descriptions <span>*</span></label>
                            <textarea name="description" id="" cols="20" rows="3" value={description} onChange={event => setdescription(event.target.value)}></textarea>
                        </div>
                        <div className="form-input image">
                            <label htmlFor="file-input">Image </label>
                            <input type="file" id="file-input" className="form-file" onChange={handleChange(1)} />

                            <input type="file" id="file-input" className="form-file" onChange={handleChange(2)} />

                            <input type="file" id="file-input" className="form-file" onChange={handleChange(3)} />

                            <input type="file" id="file-input" className="form-file" onChange={handleChange(4)} />
                        </div>

                        <div class="modal-footer">
                            {isLoading ?
                                <img src={loader} alt='' className='Loading'></img>
                                :
                                <>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="create-service" onClick={() => submit()}>Create</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddService;