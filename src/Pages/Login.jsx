import FormLogin from "../components/Fragments/FormLogin";
import imageLogin from "../assets/images/loginpage.jpg";
// import Button from "../components/Elements/Button";
import "../styles/pages/Login.css";

const Login = () => {
    return (
        <div className="container-login">
            <div className="container-gambar">
                <img src={imageLogin} alt="" />
            </div>
            <div className="container-form">
                <div className="form-login">
                    <h1>Login</h1>
                    <FormLogin />
                    <p>Belum Punya Akun? <a href="/register">Register</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
