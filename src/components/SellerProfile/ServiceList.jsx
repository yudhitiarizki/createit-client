import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Service.css';
import GeneralInfo from "./GeneralInfo";
import { Link } from "react-router-dom";
import Edit from '../../asset/Seller/edit.png';
import Trash from '../../asset/Seller/trash.png';
import AddService from './AddService';
import EditService from "./EditService";
import { deleteService, getMyService } from "../../redux/actions/service";
import loader from '../../asset/Login/loader.gif';

const ServiceList = () => {
    const dispatch = useDispatch();

    const { service } = useSelector(state => state.service);
    const { user, isLoggedIn } = useSelector(state => state.auth);
    const seller = useSelector(state => state.seller);

    const [isLoading, setIsLoading] = useState(false);
    const [idLoad, setIdLoad] = useState(0);

    const onDelete = (serviceId) => {
        setIsLoading(true);
        setIdLoad(serviceId);
        dispatch(deleteService(serviceId))
            .then(() => {
                dispatch(getMyService());
                setIdLoad(0);
                setIsLoading(false);
            })
            .catch(() => {
                setIdLoad(0);
                setIsLoading(false);
            })
    }

    return (
        <div className="service-section">
            <GeneralInfo since={seller.createdAt} total={seller.serviceSold} sold={seller.noOfBuyer} rating={seller.rating} />

            <div className="my-service">
                <div className="service-header">
                    <h4>My Service</h4>
                    {isLoggedIn ? (seller.userId === user.userId) ?
                        <button className="service-create" type="button" data-bs-toggle="modal" data-bs-target="#AddService">Create New</button>
                        : null
                        : null}
                </div>
                <div className="servicelist">
                    {service.map(service => (
                        <div className="serviceslist1-box" key={`id-${service.serviceId}`}>
                            {(idLoad === service.serviceId) ?
                                (isLoading ?
                                    <div className="deletesrv-load">
                                        <div>Deleting service</div>
                                        <img src={loader} alt='' className='Loading'></img>
                                    </div>
                                    :
                                    <></>
                                )
                                :
                                <>
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
                                            <Link to={`/service/${service.slug}`} className="service1-info3 nav-link">{service.title}</Link>
                                        </div>
                                        <div className="service1-info4">
                                            <div className="service-price">
                                                <i className='bx bx-dollar-circle'></i>
                                                <span>Start from Rp {service.startingPrice}</span>
                                            </div>
                                            {isLoggedIn ? (seller.userId === user.userId) ?
                                                <div className="service-edit">
                                                    <Link type="button" data-bs-toggle="modal" data-bs-target="#EditService">
                                                        <img className="icon-edit" src={Edit} alt="" />
                                                    </Link>
                                                    <Link>
                                                        <img className="icon-delete" onClick={() => onDelete(service.serviceId)} src={Trash} alt="" />
                                                    </Link>
                                                </div>
                                                : null
                                                : null}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    )
                    )}

                    <AddService />
                    <EditService />
                </div>
            </div>
        </div>
    )
}

export default ServiceList;