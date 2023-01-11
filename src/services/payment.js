import Api from '../Api';

const getPayment = (req, res) => {
    try {
        console.log('ok')
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