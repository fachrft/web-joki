import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import Label from "../Elements/Input/Label";
import { useState } from "react";
import OrderDesignImage from '../../assets/images/OrderDesign.png';
import axios from 'axios'
import "../../styles/Fragments/CardOrder.css";

const AddDesignOrder = () => {
    const [harga, setHarga] = useState(0);
    const [pesananBerhasil, setPesananBerhasil] = useState('')

    const handleJenisWebChange = (e) => {
        const selectedValue = e.target.value;

        switch (selectedValue) {
            case "Logo":
                setHarga(15000);
                break;
            case "Ui":
                setHarga(20000);
                break;
            case "Ux":
                setHarga(15000);
                break;
            case "Ui/Ux":
                setHarga(30000);
                break;
            case "Poster":
                setHarga(25000);
                break;
            case "Mockup":
                setHarga(30000);
                break;
            case "IlustarsiVektor":
                setHarga(30000);
                break;
            default:
                setHarga(0);
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/Design', {
                nomor_hp : e.target.NomorHp.value,
                jenis_design : e.target.JenisDesign.value,
                harga: harga
            })
            console.log(response.data)
            setPesananBerhasil(response.data.msg)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container-add-product">
            <div className="title-order-web">
                <h1>Joki Design</h1>
            </div>
            <div className="isi-order-web">
                <div className="isi-form-order">
                    <form action="" onSubmit={handleSubmit}>
                        <InputForm name="NomorHp" type="number" placeholder="Masukkan Nomor Hp Dengan Benar" text="No.Handphone" />
                        <div className="mengatur-option">
                            <Label htmlFor="Pilih" text="Pilih Jenis Web :"></Label>
                            <select name="JenisDesign" id="" onChange={handleJenisWebChange}>
                                <option value=""></option>
                                <option value="Logo">Logo</option>
                                <option value="Ui">Ui</option>
                                <option value="Ux">Ux</option>
                                <option value="Ui/Ux">Ui/Ux</option>
                                <option value="Poster">Poster</option>
                                <option value="Mockup">Mockup</option>
                                <option value="IlustarsiVektor">Ilustrasi Vektor</option>
                            </select>
                        </div>
                        <p>Harga Rp : {harga.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</p>
                        <Button title="Order Now!" type='submit'></Button>
                        {pesananBerhasil && (
                            <p className="pesanan-berhasil">{pesananBerhasil}</p>
                        )}
                    </form>
                </div>
                <div className="container-image-order">
                    <img src={OrderDesignImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddDesignOrder;
