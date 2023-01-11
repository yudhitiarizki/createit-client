import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Service.css';
import GeneralInfo from "./GeneralInfo";
import { Link } from "react-router-dom";
import Rectangle21 from '../../asset/ImgDummy/Rectangle21.png';
import Ellipse107 from '../../asset/ImgDummy/Ellipse107.png';
import Edit from '../../asset/Seller/edit.png';
import Trash from '../../asset/Seller/trash.png';
import AddService from './AddService';
import EditService from "./EditService";
import { getMyService, deleteService } from "../../redux/actions/service";

const ServiceList = ({ seller }) => {
    const dispatch = useDispatch();
    const { service } = useSelector(state => state.service);

    useEffect(() => {
        dispatch(getMyService());
    }, [dispatch]);

    const onDelete = (serviceId) => {
        dispatch(deleteService(serviceId)).then(() => {
            dispatch(getMyService());
        })
    }

    console.log(service)

    return (
        <div className="service-section">
            <GeneralInfo since={seller.createdAt} total={seller.serviceSold} sold={seller.noOfBuyer} rating={seller.rating} />

            <div className="my-service">
                <div className="service-header">
                    <h4>My Service</h4>
                    <button  className="service-create" type="button" data-bs-toggle="modal" data-bs-target="#AddService">Create New</button>
                </div>
                <div className="servicelist">
                    { service.map(service => {
                        return (
                            <div className="serviceslist1-box" key={service.serviceId}>
                                <Link className="service1imgcntr" to={`/service/${service.slug}`}>
                                    <img src={service.image} alt='' className="servicelist1-img"></img>
                                    <div className='toprated-ratebuy1'>
                                        <div><i className='bx bx-star'></i>{service.rating}</div>
                                        <div><i className='bx bx-group'></i>{service.noOfBuyer}</div>
                                    </div>
                                </Link>
                                <div className="servicelist1-info">
                                    <div className="service1-info1">
                                        <div className="service1-info2">
                                            <img src={service.photoProfile} alt=''></img>
                                            <Link to={`/seller/${service.id}`} className='nav-link'>{service.firstName} {service.lastName}</Link>
                                        </div>
                                        <Link to={`/service/${service.slug}`} className="service1-info3 nav-link">{service.description}</Link>
                                    </div>
                                    <div className="service1-info4">
                                        <div className="service-price">
                                            <i className='bx bx-dollar-circle'></i>
                                            <span>Start from Rp {service.startingPrice}</span>
                                        </div>
                                        <div className="service-edit">
                                            <Link type="button" data-bs-toggle="modal" data-bs-target="#EditService">
                                                <img className="icon-edit" src={Edit} alt="" />
                                            </Link>
                                            <Link>
                                                <img className="icon-delete" onClick={() => onDelete(service.serviceId) } src={Trash} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }) }
                    
                    <AddService funct={() => dispatch(getMyService())}/>
                    <EditService />
                </div>
            </div>
        </div>
    )
}

export default ServiceList;