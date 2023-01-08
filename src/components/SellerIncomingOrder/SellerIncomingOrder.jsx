import './SellerIncomingOrder.css';
import '../Services/DetailService.css';
import Navbar from '../General/Navbar';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import Default from '../../asset/ImgDummy/Default.png';
import { useDispatch } from 'react-redux';
import { getNewOrderDetail } from '../../redux/actions/NewOrderDetailSeller';
import SellerNewOrderDetail from './SellerNewOrderDetail';

const SellerIncomingOrder = () => {
    const dispatch = useDispatch();

    // data dummy
    const sellerNewOrder = [
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
            price: 299999,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            createdAt: '02/01/2023',
            image: Default
        },
        {
            orderId: 2,
            userId: 2,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Standard',
            delivery: 9,
            revision: 3,
            noOfConcept: null,
            noOfPages: 10,
            maxDuration: null,
            price: 499999,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            createdAt: '02/01/2022',
            image: Default
        },
        {
            orderId: 3,
            userId: 3,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 6,
            revision: 3,
            noOfConcept: null,
            noOfPages: 5,
            maxDuration: null,
            price: 200000,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            createdAt: '02/01/2023',
            image: Default
        },
        {
            orderId: 4,
            userId: 4,
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
            price: 30000,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            createdAt: '02/01/2023',
            image: Default
        },
        {
            orderId: 5,
            userId: 5,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 5,
            revision: 3,
            noOfConcept: null,
            noOfPages: 5,
            maxDuration: null,
            price: 599999,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            createdAt: '02/01/2023',
            image: Default
        },
        {
            orderId: 6,
            userId: 6,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 10,
            revision: 3,
            noOfConcept: null,
            noOfPages: 5,
            maxDuration: null,
            price: 699999,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            createdAt: '02/01/2023',
            image: Default
        },
        {
            orderId: 7,
            userId: 7,
            username: 'ahmadNaJae',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            title: 'Educational Mobile Apps',
            type: 'Regular',
            delivery: 5,
            revision: 3,
            noOfConcept: null,
            noOfPages: 5,
            maxDuration: null,
            price: 199999,
            note: 'Apps bertemakan tentang anak SD. Apps akan memuat materi pembelajaran dan latihan soal.',
            createdAt: '02/01/2023',
            image: Default
        }
    ];

    const handleDetail = (order) => {
        dispatch(getNewOrderDetail(order))
    };

    const handleApproved = () => {
        // dispatch axios patch buat ubah status order jadi working
    };

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <div className="nav-link">Seller</div>
                <i className='bx bx-chevron-right'></i>
                <div>Incoming Order List</div>
            </div>
            <div className='incomingorder-cntr'>
                <SellerNewOrderDetail />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {sellerNewOrder.map((order) => (
                                <div key={`id-${order.orderId}`} className='newordr-item-cntr'>
                                    <div className='newordr-item-left'>
                                        <img src={MessageQuestion} alt=''></img>
                                        <div className='second-left-item'>
                                            <div className='second-leftitem-title'>New Pending Order</div>
                                            <div>Buyer's Name: {order.firstName} {order.lastName}</div>
                                            <div>{order.createdAt}</div>
                                        </div>
                                    </div>
                                    <div className='newordr-item-right'>
                                        <div className='approve-btn-seller-order' onClick={handleApproved}>Approve</div>
                                        <div className='showdetail-btn' onClick={() => { handleDetail(order) }}><i className='bx bx-right-arrow-alt'></i></div>
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

export default SellerIncomingOrder;