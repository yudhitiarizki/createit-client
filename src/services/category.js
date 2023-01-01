import Api from '../Api';

const getCategory = () => {
    return Api.get('/category');
};

const CategoryService = {
    getCategory
};

export default CategoryService;

