import Navbar from "../components/Fragments/Navbar";
import AddWebOrder from "../components/Fragments/OrderPageWeb";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authSlice";
import { useEffect } from "react";
import '../styles/pages/OrderWeb.css'

const OrderWeb = () => {
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
            <AddWebOrder></AddWebOrder>
        </div>
    );
};

export default OrderWeb;
