import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
// import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../../services/authSlice";
import "../../styles/Fragments/FormLogin.css";

const FormLogin = () => {
    const dispatch = useDispatch();
    const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

    
    useEffect(() => {
        if(user || isSuccess) {
            localStorage.setItem('uuid', user.uuid)
            window.location.href = '/dashboard'
        }
        dispatch(reset())
    }, [user, isSuccess, dispatch]);
    
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(LoginUser({
            email: e.target.email.value,
            password: e.target.password.value,
        }))
    }
    return (
        <form className="form-login" onSubmit={handleLogin}>
            {isError && <p>{message}</p>}
            <InputForm name="email" type="email" placeholder="fachrifat@gmail.com" text="Email" />
            <InputForm name="password" type="password" placeholder="*****" text="Password" />
            <Button type="submit" title="Login" />
        </form>
    );
};

export default FormLogin;
