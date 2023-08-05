import profileImage from "../assets/images/profile.jpg";
import Navbar from "../components/Fragments/Navbar";
import Button from "../components/Elements/Button";
import CardUsers from "../components/Fragments/CardUser";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authSlice";
import "../styles/pages/AllUsers.css";

import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/Users");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/Users/${userId}`);
        getAllUsers();
    }

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
        <div className="penampung-all-users">
            <Navbar />
            <div className="container-card-all-users">
                {users &&
                    users.map((user) => (
                        <CardUsers>
                            <CardUsers.Header image={profileImage}></CardUsers.Header>
                            <CardUsers.Body name={user.name} role={user.role}></CardUsers.Body>
                            <Button onClick={() => deleteUser(user.uuid)} title="Delete User"></Button>
                        </CardUsers>
                    ))}
            </div>
        </div>
    );
};

export default Users;
