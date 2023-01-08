import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/actions/category";
import { getServiceByCategory, getService, getDetailService, getTopService, getServiceBySlug } from "../redux/actions/service";
import { getPackage, getPackageBySlug } from "../redux/actions/packages";
import { getReview, getReviewBySlug } from "../redux/actions/review";
import { getOrderUser } from "../redux/actions/order";
import { getNotification } from "../redux/actions/notification";
import { getUser } from "../redux/actions/user";
import { useNavigate, Link } from "react-router-dom";

const Test = () => {
    const dispatch = useDispatch();

    const payment = useSelector(state => state.payment);

    useEffect(() => {
        dispatch(getTopService());
        window.location.href = 'https://www.figma.com/file/kc6Zh5kRKw9BhEqqfv4dGX/Create-it?node-id=10%3A2&t=LscuWeOMhi8pHhCd-0'
    }, [dispatch]);

    console.log(payment)

    return (
        <>Halaman Test
            <Link to={'https://www.figma.com/file/kc6Zh5kRKw9BhEqqfv4dGX/Create-it?node-id=10%3A2&t=LscuWeOMhi8pHhCd-0'} >testttttt</Link>
        </>
    )
}

export default Test;