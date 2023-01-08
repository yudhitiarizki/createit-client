import { useState } from 'react';
import Navbar from '../General/Navbar';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import '../Services/DetailService.css';
import './SellerOrderInProgress.css';
import { useDispatch } from 'react-redux';
import { getOnProgressDetail, hideOnProgressDetail } from '../../redux/actions/DetailWorkingOrderSeller';
import SellerInProgressDetail from './SellerInProgressDetail';

const SellerOrderInProgress = () => {
    const dispatch = useDispatch();

    // data dummy
    const orderInProgress = [
        {
            orderId: 1,
            userId: 1,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 7,
            revision: 3,
            noOfConcept: null,
            noOfPages: 5,
            maxDuration: null,
            note: '',
            orderNotes: 'Revision note here',
            createdAt: '2022-01-01',
            updatedAt: '2022-01-08',
            file: 'path file 1',
            fileType: 1,
            status: 'Revising'
        },
        {
            orderId: 2,
            userId: 2,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 4,
            revision: 3,
            noOfConcept: null,
            noOfPages: 5,
            maxDuration: null,
            note: '',
            orderNotes: 'Revision note here',
            createdAt: '2022-01-08',
            updatedAt: '2022-01-12',
            file: 'https://drive.google.com/file/d/1pHiqkEaaSdLPrXJ1E3UqeX6oS1T3kG5q/view?usp=drivesdk',
            fileType: 2,
            status: 'Revising'
        },
        {
            orderId: 3,
            userId: 3,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 4,
            revision: 3,
            noOfConcept: null,
            noOfPages: 3,
            maxDuration: null,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            orderNotes: '',
            createdAt: '2022-01-12',
            updatedAt: '2022-01-12',
            file: '',
            fileType: '',
            status: 'Working'
        },
        {
            orderId: 4,
            userId: 4,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 6,
            revision: 2,
            noOfConcept: null,
            noOfPages: 6,
            maxDuration: null,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            orderNotes: '',
            createdAt: '2022-01-15',
            updatedAt: '2022-01-15',
            file: '',
            fileType: '',
            status: 'Working'
        },
        {
            orderId: 5,
            userId: 5,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 9,
            revision: 7,
            noOfConcept: null,
            noOfPages: 5,
            maxDuration: null,
            note: '',
            orderNotes: 'Revision note here',
            createdAt: '2022-01-13',
            updatedAt: '2022-01-21',
            file: 'https://drive.google.com/file/d/1pHiqkEaaSdLPrXJ1E3UqeX6oS1T3kG5q/view?usp=drivesdk',
            fileType: 2,
            status: 'Revising'
        }
    ];

    const workingOrder = orderInProgress.filter(order => order.status === 'Working');
    const revisingOrder = orderInProgress.filter(order => order.status === 'Revising');

    const [sellerOrder, setSellerOrder] = useState(workingOrder);

    const workingtab = () => {
        const workingTab = document.getElementById('working-tab').classList;
        const revisionTab = document.getElementById('revision-tab').classList;

        if (!workingTab.contains('sllrorder-actvtab')) {
            workingTab.add('sllrorder-actvtab');
            revisionTab.remove('sllrorder-actvtab');
        }

        setSellerOrder(workingOrder);
        dispatch(hideOnProgressDetail());
    };

    const revisiontab = () => {
        const workingTab = document.getElementById('working-tab').classList;
        const revisionTab = document.getElementById('revision-tab').classList;

        if (!revisionTab.contains('sllrorder-actvtab')) {
            revisionTab.add('sllrorder-actvtab');
            workingTab.remove('sllrorder-actvtab');
        }

        setSellerOrder(revisingOrder);
        dispatch(hideOnProgressDetail());
        document.getElementById('custom-inputtext2').innerHTML = '';
    };

    const handleShowDetail = (order) => {
        dispatch(getOnProgressDetail(order));
        document.getElementById('custom-inputtext2').innerHTML = '';
    };

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Order In Progress</div>
            </div>
            <div className='sllr-inprgrsorder-tab'>
                <div id='working-tab' className='sllrorder-actvtab' onClick={workingtab}>Working ({workingOrder.length})</div>
                <div id='revision-tab' onClick={revisiontab}>Revision ({revisingOrder.length})</div>
            </div>
            <div className='incomingorder-cntr'>
                <SellerInProgressDetail />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {sellerOrder.map((order) => (
                                <div key={`id-${order.orderId}`} className='newordr-item-cntr'>
                                    <div className='newordr-item-left'>
                                        <img src={MessageQuestion} alt=''></img>
                                        <div className='second-left-item'>
                                            <div className='second-leftitem-title'>
                                                <span>Order {order.orderId} </span>
                                                : {order.title}
                                            </div>
                                            <div>Buyer's Name: {order.firstName} {order.lastName}</div>
                                            {(order.status === 'Working') ? (
                                                <div>{order.createdAt}</div>
                                            ) : (
                                                <div>{order.updatedAt}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='showdetail-arrow'>
                                        <div className='showdetail-btn' onClick={() => {handleShowDetail(order)}}><i className='bx bx-right-arrow-alt'></i></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SellerOrderInProgress;