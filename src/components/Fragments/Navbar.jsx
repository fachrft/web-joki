import { Link } from "react-router-dom";
import "../../styles/Fragments/Navbar.css";
import Button from "../Elements/Button";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../services/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    // console.log(user)

    const handleLogout = () => {
        dispatch(LogOut());
        dispatch(reset());
        window.location.href = "/";
    };
    return (
        <nav>
            {user && <h2 key={user.name}>Halo {user.name.split(" ")[0]}</h2>}
            <ul>
                <li>
                    <Link to='/dashboard' className="judul-nav" href="">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/product' className="judul-nav" href="">
                        Product
                    </Link>
                </li>
                <li>
                    <Link to='/riwayat' className="judul-nav" href="">
                        Riwayat
                    </Link>
                </li>
                <li>
                    <Link to='/account' className="judul-nav" href="">
                        Account
                    </Link>
                </li>
                {user && user.role === 'admin' &&(
                <li>
                    <Link to='/users' className="judul-nav" href="">
                        Users
                    </Link>
                </li>
                )}

            </ul>
            <div>
                <Button title="Logout" onClick={handleLogout}></Button>
            </div>
        </nav>
    );
};

export default Navbar;
