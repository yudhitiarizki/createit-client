import { Link } from "react-router-dom";
import Navbar from "../General/Navbar";
import '../Services/DetailService.css';
import './AdminApproval.css';
import '../SellerIncomingOrder/SellerIncomingOrder.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Rectangle25 from '../../asset/ImgDummy/Rectangle25.svg';
import MessageQuestion from '../../asset/Navbar/message-question.svg';
import { useDispatch } from "react-redux";
import { getNewSellerDetail } from "../../redux/actions/NewSellerDetail";
import NewSellerDetail from "./NewSellerDetail";

const AdminApproval = () => {
    const dispatch = useDispatch();

    const seller = [
        {
            sellerId: 1,
            userId: 1,
            username: 'jaeminnaa1',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            photoProfile: Rectangle25,
            description: "Helo, I'm Jaemin. I have excellent skills in design. I can use adobe photoshop, adobe illustrator, figma, and canva. I have around 2 years experience in graphic and logo design.",
            createdAt: '02-01-2022'
        },
        {
            sellerId: 2,
            userId: 2,
            username: 'jaeminnaa2',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            photoProfile: Rectangle25,
            description: "Helo, I'm Jaemin. I have excellent skills in design. I can use adobe photoshop, adobe illustrator, figma, and canva. I have around 2 years experience in graphic and logo design.",
            createdAt: '02-01-2022'
        },
        {
            sellerId: 3,
            userId: 3,
            username: 'jaeminnaa3',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            photoProfile: Rectangle25,
            description: "Helo, I'm Jaemin. I have excellent skills in design. I can use adobe photoshop, adobe illustrator, figma, and canva. I have around 2 years experience in graphic and logo design.",
            createdAt: '02-01-2022'
        },
        {
            sellerId: 4,
            userId: 4,
            username: 'jaeminnaa4',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            photoProfile: Rectangle25,
            description: "Helo, I'm Jaemin. I have excellent skills in design. I can use adobe photoshop, adobe illustrator, figma, and canva. I have around 2 years experience in graphic and logo design.",
            createdAt: '02-01-2022'
        },
        {
            sellerId: 5,
            userId: 5,
            username: 'jaeminnaa5',
            firstName: 'Ahmad',
            lastName: 'Na Jaemin',
            photoProfile: Rectangle25,
            description: "Helo, I'm Jaemin. I have excellent skills in design. I can use adobe photoshop, adobe illustrator, figma, and canva. I have around 2 years experience in graphic and logo design.",
            createdAt: '02-01-2022'
        },
    ];

    const showdetail = (item) => {
        dispatch(getNewSellerDetail(item))
    };

    const approveSeller = (sellerId) => {
        // dispatch ke axios patch /regseller/approve, payload sellerId dan isVerified: true
    };

    const rejectSeller = (sellerId) => {
        // dispatch ke axios delete /regseller/reject, payload sellerId
    }

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className="navbar-text1">
                <Link to='/' className="nav-link">Home</Link>
                <i className='bx bx-chevron-right'></i>
                <div>Approval Seller</div>
            </div>

            <div className='incomingorder-cntr'>
                <NewSellerDetail />
                <div className='newordersellerlist'>
                    <div className='newordrlist-hdr'>Manage Request</div>
                    <div className='newordrlist-cntr'>
                        <div className='newordrlist-inside'>
                            {seller.map((item) => (
                                <div key={`id-${item.sellerId}`} className='newordr-item-cntr'>
                                    <div className='newordr-item-left22'>
                                        <img src={MessageQuestion} alt=''></img>
                                        <div className='second-left-item'>
                                            <div className='second-leftitem-title'>New Seller Account Submission</div>
                                            <div>Seller Name: {item.firstName} {item.lastName}</div>
                                            <div>{new Date(item.createdAt).toString().split('(')[0]}</div>
                                        </div>
                                    </div>
                                    <div className='newordr-item-right'>
                                        <div className="apprvdeny-btnrow">
                                            <div className='approve-btn-seller-order' onClick={() => {approveSeller(item.sellerId)}}>Approve</div>
                                            <div className="denyseller-btn" onClick={() => {rejectSeller(item.sellerId)}}>Deny</div>
                                        </div>
                                        <div className='showdetail-btn' onClick={() => {showdetail(item)}}><i className='bx bx-right-arrow-alt'></i></div>
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

export default AdminApproval;