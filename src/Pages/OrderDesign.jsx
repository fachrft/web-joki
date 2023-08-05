import Navbar from "../components/Fragments/Navbar";
import AddDesignOrder from "../components/Fragments/OrderPageDesgin";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authSlice";
import { useEffect } from "react";
import '../styles/pages/OrderWeb.css'

const OrderDesign = () => {
    const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if(isError) {
            window.location.href = "/404";
        }
    }, [isError]);

    return (
        <div className="container-order-web">
            <Navbar />
            <AddDesignOrder></AddDesignOrder>
        </div>
    );
};

export default OrderDesign;
