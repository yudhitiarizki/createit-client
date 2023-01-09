import {
    FETCH_MY_SELLER,
} from './types';

import SellerService from '../../services/seller';

import { toast } from 'react-toastify';

export const getMySeller = (sellerId) => async dispatch => {
    return SellerService.getMySeller(sellerId).then(
        response => {
            dispatch({
                type: FETCH_MY_SELLER,
                payload: {
                    seller: response.data.data
                }
            });

            return Promise.resolve();
        }, error => {
            const message = error.response;

            toast.error(message.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.reject();
        }
    )
}

