import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/actions/category";
import { getServiceByCategory, getService, getDetailService, getTopService, getServiceBySlug } from "../redux/actions/service";
import { getPackage, getPackageBySlug } from "../redux/actions/packages";
import { getReview, getReviewBySlug } from "../redux/actions/review";
import { getOrderUser } from "../redux/actions/order";
import { getNotification } from "../redux/actions/notification";
import { getUser } from "../redux/actions/user";

const Test = () => {
    const dispatch = useDispatch();

    const service = useSelector(state => state.service);

    useEffect(() => {
        dispatch(getServiceByCategory(2));
    }, [dispatch]);

    console.log(service);

    return (
        <>Halaman Test</>
    )
}

export default Test;