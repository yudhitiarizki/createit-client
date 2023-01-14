import Api from '../Api';
import AuthHeader from './Auth-header';

const getPayment = (req, res) => {
    try {
        return res.json({
            message: 'Success'
        })
    } catch (error) {
        console.log('g')
        return res.json({
            message: 'Failed to retrive payment'
        })
    }
}

const PaymentService = {
    getPayment
}

export default PaymentService;