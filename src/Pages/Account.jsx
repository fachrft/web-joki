// import InputForm from "../components/Elements/Input";
import Navbar from "../components/Fragments/Navbar";
import profileImage from "../assets/images/profile.jpg";
import Button from "../components/Elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Account.css";

const Account = () => {
    const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);

    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            window.location.href = "/404";
        }
    }, [isError]);

    return (
        <div className="container-account">
            <Navbar />
            <div className="container-profile">
                <div className="card-profile">
                    <div className="profile">
                        <img src={profileImage} alt="" />
                        <h2>Kartu Nama Legal</h2>
                    </div>
                    {user && (
                        <div key={user.uuid} className="account">
                            <p>{user.uuid}</p>
                            <h5>Name :</h5>
                            <h3>{user.name}</h3>
                            <h5>Email :</h5>
                            <h3>{user.email}</h3>
                            <h5>Role :</h5>
                            <h3>{user.role}</h3>
                            <Link to={`/account/edit/${user.uuid}`}>
                                <Button title="Edit Profile"></Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Account;
