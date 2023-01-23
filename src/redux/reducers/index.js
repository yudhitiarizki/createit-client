import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import category from './category';
import notification from './notification';
import order from './order';
import packages from './packages';
import review from './review';
import seller from './seller';
import service from './service';
import user from './user';
import payment from './payment';
import neworderdetailseller from './neworderdetailseller';
import sllrOnPrgrssOrderDetail from './workingorderdetailseller';
import newSellerDetail from './newsellerdetail';
import Loading from './loading';
import chat from './chat';
import participant from './participant';

export default combineReducers({
    auth,
    message,
    category,
    notification,
    order,
    packages,
    review,
    seller,
    service,
    user,
    neworderdetailseller,
    sllrOnPrgrssOrderDetail,
    payment,
    newSellerDetail,
    Loading,
    chat,
    participant
});
