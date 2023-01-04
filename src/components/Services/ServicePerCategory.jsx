import './ServicePerCategory.css';
import '../Home/HomePage.css';
import Navbar from '../General/Navbar';
import Searchbox from '../General/Searchbox';
import Pose10 from '../../asset/HomePage/Pose10.png';
import { Link, useParams } from 'react-router-dom';
import ServiceListCategory from './ServicesListCategory';

const ServicePerCategory = () => {
    const { id } = useParams();

    // ini nanti ganti pakai axios get "/category" dari redux
    const categoryList = [
        {
            "categoryId": 1,
            "category": "Android Developer",
            "image": "category1"
        },
        {
            "categoryId": 2,
            "category": "AR VR Developer",
            "image": "category2"
        },
        {
            "categoryId": 3,
            "category": "Game Developer",
            "image": "category3"
        },
        {
            "categoryId": 4,
            "category": "iOS Developer",
            "image": "category4"
        },
        {
            "categoryId": 5,
            "category": "iOT",
            "image": "category5"
        },
        {
            "categoryId": 6,
            "category": "IT Support",
            "image": "category5"
        },
        {
            "categoryId": 7,
            "category": "QA Engineer",
            "image": "category5"
        },
        {
            "categoryId": 8,
            "category": "Solidity Developer",
            "image": "category5"
        },
        {
            "categoryId": 9,
            "category": "Website Developer",
            "image": "category5"
        },
        {
            "categoryId": 10,
            "category": "Wordpress Developer",
            "image": "category5"
        }
    ];

    return (
        <div>
            <div className='top-container'>
                <div className='Banner1'>
                    <Navbar />
                    <div className='ellipse1'>
                        <img src={Pose10} alt='' className='pose1'></img>
                    </div>
                    <div className='nav-seller2'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <i className='bx bx-chevron-right'></i>
                        <span>Service List</span>
                    </div>
                    <div className='text1-container11'>
                        <div className='text1-11'>It's Nothing But Service</div>
                        <div className='text1-21'>Get The Best IT Service Only In Create IT!</div>
                    </div>
                    <div className='searchbox-cntr1'>
                        <Searchbox />
                    </div>
                </div>
            </div>
            <div className='textcategory-container'>
                <div className='text2-1'>All In One IT Solution</div>
                <div className='text2-2'>We can help with all your needs. Over {categoryList.length} service categories to choose from.</div>
            </div>
            <div className='categorylist1'>
                {categoryList.map((category) => (category.categoryId === +id) ? (
                    <div className='categorybox1 catbox1' key={`id-${category.categoryId}`}>
                        {category.category}
                    </div>
                ) : (
                    <div className='categorybox1 catbox2' key={`id-${category.categoryId}`}>
                        <Link to={`/category/${category.categoryId}`} className='nav-link'>{category.category}</Link>
                    </div>
                ))}
            </div>
            <ServiceListCategory />
        </div>
    )
};

export default ServicePerCategory;