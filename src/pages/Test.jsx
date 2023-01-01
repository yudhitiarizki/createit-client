import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/actions/category";
import { getServiceByCategory, getService, getDetailService, getTopService } from "../redux/actions/service";
import { getPackage } from "../redux/actions/packages";
import { getReview } from "../redux/actions/review";
import { getOrderUser } from "../redux/actions/order";
import { getNotification } from "../redux/actions/notification";

const Test = () => {
    const dispatch = useDispatch();

    const notification = useSelector(state => state.notification);

    useEffect(() => {
        dispatch(getNotification());
    }, [dispatch]);

    console.log(notification);

    return (
        <>Halaman Test</>
    )
}

export default Test;