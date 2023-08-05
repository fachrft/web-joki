import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import axios from "axios";
import { useState } from "react";
import "../../styles/Fragments/FormRegister.css";

const FormRegister = () => {
    const [errorRegistrasi, setErrorRegistrasi] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/Users", {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                confirmPassword: e.target.confirmPassword.value,
            });
            window.location.href = '/'
            return response.status
        } catch (error) {
            setErrorRegistrasi((error.response.data.msg))
        }
    };

    return (
        <form onSubmit={handleRegister}>
            {errorRegistrasi && <p style={{color: 'red'}}>{errorRegistrasi}</p>}
            <InputForm name="name" type="text" placeholder="Fachrifat Zhafran" text="Nama" />
            <InputForm name="email" type="email" placeholder="fachrifat@gmail.com" text="Email" />
            <InputForm name="password" type="password" placeholder="*****" text="Password" />
            <InputForm name="confirmPassword" type="password" placeholder="*****" text="Confirm Password" />
            <Button type='submit' title="Registrasi" />
        </form>
    );
};

export default FormRegister;
