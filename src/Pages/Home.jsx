import Navbar from "../components/Fragments/Navbar";
import landingpage from "../assets/images/landingpage.png";
import Button from "../components/Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authSlice";
import { useEffect } from "react";
import "../styles/pages/Home.css";

const Home = () => {
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
        <div className="container">
            <Navbar />
            <div className="container-content">
                <div className="container-judul">
                    <h1>Mudahkan Pekerjaan Anda Dengan Menggunakan Jasa Kami</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia quam distinctio libero est. Veritatis quidem qui, reiciendis inventore nulla velit obcaecati pariatur accusamus tenetur minima error voluptates nesciunt deserunt.
                    </p>
                    <Link to="/product">
                        <Button title="Coba Sekarang" />
                    </Link>
                </div>
                <div className="container-gambar">
                    <img src={landingpage} alt="landingpage" />
                </div>
            </div>
        </div>
    );
};

export default Home;
