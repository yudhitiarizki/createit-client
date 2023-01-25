import React, { useState, useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateService } from "../../redux/actions/service";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Modal.css';

const EditService = () => {
    const dispatch = useDispatch();
    const { detail } = useSelector(state => state.service);
    const category = useSelector(state => state.category);

    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [categoryId, setcategory] = useState('');
    const [images, setImages] = useState([]);
    const [newImage, setNewImage] = useState([]);

    useEffect(() => {
        setdescription(detail.description);
        setcategory(detail.categoryId);
        settitle(detail.title);
        if(detail.image) { 
            const image = detail.image.map(img => {
                return {imageId: img.imageId, image: img.image, update: false}
            })
            setImages(image)
            const length = detail.image.length;
            const array = [];
            if(length < 4){
                const lengthNewImage = 4 - length;
                for (let i = 0; i < lengthNewImage; i++) {
                    array.push({id: i, image: null});
                }
                setNewImage(array)
            }
            
        }

    }, [detail]);


    const handleChangeImage = useCallback((id) => (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const file = reader.result;
                setImages(
                    images.map((image) => {
                        if (image.imageId === id) {
                            return { ...image, image: file, update: true };
                        }
                        return image;
                    })
                );
            }
        }
    }, [images, setImages]);

    const handleChangeNewImage = useCallback((id) => (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                const file = reader.result;
                setNewImage(
                    newImage.map((image) => {
                        if (image.id === id) {
                            return { ...image, image: file };
                        }
                        return image;
                    })
                );
            }
        }
    }, [newImage, setNewImage]);

    const onSubmit = useCallback(() => {
        const filter = newImage.filter(img => img.image !== null);
        const Sendimage = filter.map((image) => {return image.image});
        const imgFilter = images.filter(img => img.update === true);
        dispatch(updateService(detail.serviceId, title, description, categoryId, imgFilter, Sendimage));
    }, [newImage, title, description, categoryId, images, detail, dispatch])
    
    return (
        <div className="modal fade" id="EditService" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                    <div className="title-modal">
                        <h4>Edit Service</h4>
                    </div>
                    <div className="form-input">
                        <label htmlFor="Category">Category <span>*</span></label>
                        <select className="form-select" aria-label="Default select example" onChange={event => setcategory(event.target.value)}>
                        { category.map(cat => (
                            <option key={`id-${cat.categoryId}`} value={cat.categoryId} defaultValue={cat.categoryId === detail.categoryId}>
                                {cat.category}
                            </option>
                        )) }
                        </select>
                    </div>
                    
                    <div className="form-input">
                        <label htmlFor="servicename">Service Name <span>*</span></label>
                        <input type="text" id='servicename' value={title} onChange={event => settitle(event.target.value)}/>
                    </div>

                    <div className="form-input">
                        <label htmlFor="description">Descriptions <span>*</span></label>
                        <textarea name="description" id="" cols="20" rows="3" value={description} onChange={event => setdescription(event.target.value)}></textarea>
                    </div>
                    
                    { detail.image && detail.image.map(image => {
                        return (
                            <div className="form-input" key={`id-${image.imageId}`}>
                                <label htmlFor="file-input">Image </label>
                                <img src={image.image} alt={1} loading="lazy"></img>
                                <input type="file" id="file-input" className="form-file" onChange={handleChangeImage(image.imageId)}/>
                            </div>
                        )
                    })}


                    { newImage.length && (
                        <div className="form-input image">
                            <label htmlFor="file-input">Image </label>
                            { newImage.map(img => {
                                return <input key={`id-${img.id}`} type="file" id="file-input" className="form-file" onChange={handleChangeNewImage(img.id)} />
                            }) }
                        </div>
                    ) }
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="create-service" onClick={onSubmit}>Create</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EditService;