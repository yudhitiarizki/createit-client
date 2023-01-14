import Api from '../Api';
import AuthHeader from './Auth-header';

const getMySeller = (sellerId) => {
    return Api.get(`/seller/${sellerId}`, {headers: AuthHeader()});
};

const SellerService = {
    getMySeller
}

export default SellerService;