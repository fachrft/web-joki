import FormRegister from "../components/Fragments/FormRegister";
import imageRegister from "../assets/images/register.jpg";
import "../styles/pages/Register.css";

const Register = () => {
    return (
        <div className="container-register">
            <div className="container-form">
                <div className="form">
                    <h1>Registrasi</h1>
                    <p>Buatlah Akun Anda Sebelum Memesan!</p>
                    <FormRegister />
                    <p>Sudah Punya Akun? <a href="a">Login</a></p>
                </div>
            </div>
            <div className="container-gambar">
                <img src={imageRegister} alt="" />
            </div>
        </div>
    );
};

export default Register;
