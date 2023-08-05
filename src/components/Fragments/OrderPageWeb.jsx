import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import Label from "../Elements/Input/Label";
import { useState } from "react";
import axios from 'axios'
import OrderWebImage from "../../assets/images/OrderWeb.png";
import "../../styles/Fragments/CardOrder.css";

const AddWebOrder = () => {
    const [hargaWeb, setHargaWeb] = useState(0);
    const [pesananBerhasil, setPesananBerhasil] = useState('')

    const handleJenisWebChange = (e) => {
        const selectedValue = e.target.value;
        
        switch (selectedValue) {
            case "Portofolio":
                setHargaWeb(20000);
                break;
            case "E-Commerce":
                setHargaWeb(50000);
                break;
            case "Web Sekolah":
                setHargaWeb(40000);
                break;
            default:
                setHargaWeb(0);
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/website', {
                nomor_hp : e.target.NomorHp.value,
                jenis_web : e.target.JenisWeb.value,
                harga: hargaWeb
            })
            // console.log(response)
            setPesananBerhasil(response.data.msg)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container-add-product">
            <div className="title-order-web">
                <h1>Joki Web</h1>
            </div>
            <div className="isi-order-web">
                <div className="isi-form-order">
                    <form action="" onSubmit={handleSubmit}>
                        <InputForm name="NomorHp" type="number" placeholder="Masukkan Nomor Hp Dengan Benar" text="No.Handphone" />
                        <div className="mengatur-option">
                            <Label htmlFor="Pilih" text="Pilih Jenis Web :"></Label>
                            <select name="JenisWeb" id="" onChange={handleJenisWebChange}>
                                <option value=""></option>
                                <option value="Portofolio">Portofolio</option>
                                <option value="E-Commerce">E-Commerce</option>
                                <option value="Web Sekolah">Web Sekolah</option>
                            </select>
                        </div>
                        <p>Harga Rp : {hargaWeb.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</p>
                        <Button title="Order Now!" type='submit'></Button>
                        {pesananBerhasil && (
                            <p className="pesanan-berhasil">{pesananBerhasil}</p>
                        )}
                    </form>
                </div>
                <div className="container-image-order">
                    <img src={OrderWebImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddWebOrder;
