import Navbar from "../components/Fragments/Navbar";
import Card from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import cardDesign from "../assets/images/carddesgin.jpg";
import cardPpt from "../assets/images/cardppt.jpg";
import cardWeb from "../assets/images/cardwebsite.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authSlice";
import { useEffect } from "react";
import "../styles/pages/Product.css";
const Product = () => {
    const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            window.location.href = "/404";
        }
    }, [isError]);

    return (
        <div className="container-product">
            <Navbar />
            <div className="penampung-card">
                <Card>
                    <Card.Header image={cardDesign}></Card.Header>
                    <Card.Body title="Design" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, iure!"></Card.Body>
                    <Link to="/product/orderdesign">
                        <Button title="Pesan Sekarang"></Button>
                    </Link>
                </Card>
                <Card>
                    <Card.Header image={cardPpt}></Card.Header>
                    <Card.Body title="Power Point" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, iure!"></Card.Body>
                    <Link to="/product/orderppt">
                        <Button title="Pesan Sekarang"></Button>
                    </Link>
                </Card>
                <Card>
                    <Card.Header image={cardWeb}></Card.Header>
                    <Card.Body title="Website" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, iure!"></Card.Body>
                    <Link to="/product/orderweb">
                        <Button title="Pesan Sekarang"></Button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default Product;
