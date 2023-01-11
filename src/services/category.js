import Api from '../Api';

const getCategory = () => {
    return Api.get('/category');
};

const createCategory = (category, description, image) => {
    return Api.post('/category', {category, description, image});
};

const CategoryService = {
    getCategory, createCategory
};

export default CategoryService;

