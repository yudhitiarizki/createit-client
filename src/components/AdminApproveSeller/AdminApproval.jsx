import { Link } from "react-router-dom";
import Navbar from "../General/Navbar";
import '../Services/DetailService.css';
import './AdminApproval.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const AdminApproval = () => {

    return (
        <div>
            <div className="detailservice-navbar">
                <Navbar />
            </div>
            <div className='nav-admin-approval'>
                <Link to='/' className='nav-link'>Home</Link>
                <i className='bx bx-chevron-right'></i>
                <span>Approval Seller</span>
            </div>
            
        </div>
    )
};

export default AdminApproval;