import React from "react";
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

const ServiceList = () => {
    return (
        <div className="service-section">
            <GeneralInfo since={'27/06/2002'} total={'6'} sold={'2.230'} rating={"4.5"} />

            <div className="my-service">
                <div className="service-header">
                    <h4>My Service</h4>
                    <button  className="service-create" type="button" data-bs-toggle="modal" data-bs-target="#AddService">Create New</button>
                </div>
                <div className="servicelist">
                    <div className="serviceslist1-box" key={1}>
                        <Link className="service1imgcntr" to={`/service/${1}`}>
                            <img src={Rectangle21} alt='' className="servicelist1-img"></img>
                            <div className='toprated-ratebuy1'>
                                <div><i className='bx bx-star'></i>{4.9}</div>
                                <div><i className='bx bx-group'></i>{1}</div>
                            </div>
                        </Link>
                        <div className="servicelist1-info">
                            <div className="service1-info1">
                                <div className="service1-info2">
                                    <img src={Ellipse107} alt=''></img>
                                    <Link to={`/seller/${1}`} className='nav-link'>Ahmad Na Jaemin</Link>
                                </div>
                                <Link to={`/service/${1}`} className="service1-info3 nav-link">{'Keren banget'}</Link>
                            </div>
                            <div className="service1-info4">
                                <div className="service-price">
                                    <i className='bx bx-dollar-circle'></i>
                                    <span>Start from Rp 20000</span>
                                </div>
                                <div className="service-edit">
                                    <Link type="button" data-bs-toggle="modal" data-bs-target="#EditService">
                                        <img className="icon-edit" src={Edit} alt="" />
                                    </Link>
                                    <Link>
                                        <img className="icon-delete" src={Trash} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceslist1-box" key={1}>
                        <Link className="service1imgcntr" to={`/service/${1}`}>
                            <img src={Rectangle21} alt='' className="servicelist1-img"></img>
                            <div className='toprated-ratebuy1'>
                                <div><i className='bx bx-star'></i>{4.9}</div>
                                <div><i className='bx bx-group'></i>{1}</div>
                            </div>
                        </Link>
                        <div className="servicelist1-info">
                            <div className="service1-info1">
                                <div className="service1-info2">
                                    <img src={Ellipse107} alt=''></img>
                                    <Link to={`/seller/${1}`} className='nav-link'>Ahmad Na Jaemin</Link>
                                </div>
                                <Link to={`/service/${1}`} className="service1-info3 nav-link">{'Keren banget'}</Link>
                            </div>
                            <div className="service1-info4">
                                <div className="service-price">
                                    <i className='bx bx-dollar-circle'></i>
                                    <span>Start from Rp 20000</span>
                                </div>
                                <div className="service-edit">
                                    <Link>
                                        <img className="icon-edit" src={Edit} alt="" />
                                    </Link>
                                    <Link>
                                        <img className="icon-delete" src={Trash} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceslist1-box" key={1}>
                        <Link className="service1imgcntr" to={`/service/${1}`}>
                            <img src={Rectangle21} alt='' className="servicelist1-img"></img>
                            <div className='toprated-ratebuy1'>
                                <div><i className='bx bx-star'></i>{4.9}</div>
                                <div><i className='bx bx-group'></i>{1}</div>
                            </div>
                        </Link>
                        <div className="servicelist1-info">
                            <div className="service1-info1">
                                <div className="service1-info2">
                                    <img src={Ellipse107} alt=''></img>
                                    <Link to={`/seller/${1}`} className='nav-link'>Ahmad Na Jaemin</Link>
                                </div>
                                <Link to={`/service/${1}`} className="service1-info3 nav-link">{'Keren banget'}</Link>
                            </div>
                            <div className="service1-info4">
                                <div className="service-price">
                                    <i className='bx bx-dollar-circle'></i>
                                    <span>Start from Rp 20000</span>
                                </div>
                                <div className="service-edit">
                                    <Link>
                                        <img className="icon-edit" src={Edit} alt="" />
                                    </Link>
                                    <Link>
                                        <img className="icon-delete" src={Trash} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AddService />
                    <EditService />
                </div>
            </div>
        </div>
    )
}

export default ServiceList;