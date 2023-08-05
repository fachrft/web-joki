import Navbar from "../components/Fragments/Navbar";
import AddPptOrder from "../components/Fragments/OrderPagePpt";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authSlice";
import { useEffect } from "react";
import '../styles/pages/OrderWeb.css'

const OrderPpt = () => {
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
            <AddPptOrder></AddPptOrder>
        </div>
    );
};

export default OrderPpt;
