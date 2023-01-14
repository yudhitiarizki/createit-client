import Api from '../Api';
import AuthHeader from './Auth-header';

const getCategory = () => {
    return Api.get('/category');
};

const createCategory = (category, description, image) => {
    return Api.post('/category', {category, description, image}, {
        headers: AuthHeader()
    });
};

const CategoryService = {
    getCategory, createCategory
};

export default CategoryService;

