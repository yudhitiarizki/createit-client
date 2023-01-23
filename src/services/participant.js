import Api from '../Api';
import AuthHeader from './Auth-header';

const getOther = () => {
    return Api.get('/otheruser', {headers: AuthHeader()});
}

const createRoom = (userId, sellerId) => {
    return Api.post('/createroom', {userId, sellerId}, {headers: AuthHeader()});
}

const PartService = {
    getOther,
    createRoom
};

export default PartService;