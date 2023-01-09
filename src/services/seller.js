import Api from '../Api';

const getMySeller = (sellerId) => {
    return Api.get(`/seller/${sellerId}`);
};

const SellerService = {
    getMySeller
}

export default SellerService;