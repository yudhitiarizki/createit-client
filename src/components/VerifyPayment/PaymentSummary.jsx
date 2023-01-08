import './PaymentSummary.css';
import tickCircle from '../../asset/Payment/tick-circle.svg';

const PaymentSummary = () => {
    // data dummy
    const paymentData = {
        bankName: 'Bank Mandiri',
        VAN: '432423421234235543',
        price: 50999,
        expiredDate: '2022-05-01'
    }

    return (
        <div className='paymentdata-cntr'>
            <div className='paymentdata-box'>
                <div className='pymntdata-header'>
                    <img src={tickCircle} alt=''></img>
                    <div className='order-cnfrmd'>ORDER CONFIRMED!</div>
                    <div className='paymentdata-msg'>Please make a payment immediately.</div>
                </div>
                <div className='pymntdata-row'>
                    <div className='pymntdata-col1'>Bank Name</div>
                    <div className='pymntdata-col2'>{paymentData.bankName}</div>
                </div>
                <div className='pymntdata-row'>
                    <div className='pymntdata-col1'>Virtual Account Number</div>
                    <div className='pymntdata-col2'>{paymentData.VAN}</div>
                </div>
                <div className='pymntdata-row'>
                    <div className='pymntdata-col1'>Price</div>
                    {(paymentData.price % 1000 === 0) ? (
                        <div className='pymntdata-col2'>Rp {paymentData.price / 1000}.000,-</div>
                    ) : (
                        <div className='pymntdata-col2'>Rp {paymentData.price / 1000},-</div>
                    )}
                </div>
                <div className='pymntdata-row'>
                    <div className='pymntdata-col1'>Expired Date</div>
                    <div className='pymntdata-col2'>{new Date(paymentData.expiredDate).toString().split('(')[0]}</div>
                </div>
            </div>
        </div>
    )
};

export default PaymentSummary;