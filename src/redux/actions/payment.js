import { SEND_PAYMENT } from './types';

import PaymentService from '../../services/payment';

import { toast } from 'react-toastify';

export const sendPayment = (data) => async dispatch => {
    try {
        dispatch({
            type: SEND_PAYMENT,
            payload: {
                data: data
            }
        })
    } catch (error) {
        toast.error(error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}