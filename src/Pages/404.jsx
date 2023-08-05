import image404 from "../assets/images/404.png";
// import Navbar from "../components/Fragments/Navbar";
import "../styles/pages/404.css";

const NotFound = () => {
    return (
        <div className="not-found">
            {/* <Navbar /> */}
            <div className="penampung-not-found">
                <div className="title-not-found">
                    <h1>Ooopss..</h1>
                    <h2>Maaf Anda Harus Login terlebih dahulu...</h2>
                </div>
                <img src={image404} alt="404" />
            </div>
        </div>
    );
};

export default NotFound;
