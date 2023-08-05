import Button from "../Elements/Button";
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../../styles/Elements/Input.css'


const FormEdit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [berhasil, setBerhasil] = useState("");
    const { uuid } = useParams();

    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/Users/${uuid}`);
                setName(response.data.name);
                setEmail(response.data.email);
                setRole(response.data.role);
            } catch (error) {
                console.log(error);
            }
        };
        getUserById();
    }, [uuid]);

    const handleEditForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:5000/Users/${uuid}`, {
                name: name,
                email: email,
                role: role,
            });
            setBerhasil(response.data.msg)
            setTimeout(() => {
                window.location.href = '/account'
            }, 1500)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form action="" className="form-login" onSubmit={handleEditForm}>
            <div className="container-input">
                <label htmlFor='name' text='Nama'>
                    Nama
                </label>
                <input type='Name' value={name} name='name' placeholder='Masukkan Nama' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="container-input">
                <label htmlFor='name' text='Nama'>
                    Email
                </label>
                <input type='email' value={email} name='name' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="container-input">
                <label htmlFor='name' text='Nama'>
                    Role
                </label>
                <input type='text' value={role} name='name' placeholder='Confirm Password' onChange={(e) => setRole(e.target.value)} />
            </div>
            <Button type="submit" title="Registrasi" />
            {berhasil && (
                <p>{berhasil}</p>
            )}
        </form>
    );
};

export default FormEdit;
