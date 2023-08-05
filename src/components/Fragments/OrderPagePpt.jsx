import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useState } from "react";
import OrderPptImage from '../../assets/images/OrderPpt.png'
import "../../styles/Fragments/CardOrder.css";

const AddPptOrder = () => {
    const [harga, setHarga] = useState(15000);
    return (
        <div className="container-add-product">
            <div className="title-order-web">
                <h1>Joki Ppt</h1>
            </div>
            <div className="isi-order-web">
                <div className="isi-form-order">
                    <form action="">
                        <InputForm name="NomorHp" type="number" placeholder="Masukkan Nomor Hp Dengan Benar" text="No.Handphone :" />
                        <InputForm name="PelajaranPpt" type="text" placeholder="Masukkan Nama Mata Pelajaran" text="Mata Pelajaran :" />
                        <InputForm name="MateriPpt" type="text" placeholder="Masukkan Nama Materinya" text="Materi :" />
                        <p>Harga Rp : {harga.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</p>
                        <Button title="Order Now!"></Button>
                    </form>
                </div>
                <div className="container-image-order">
                    <img src={OrderPptImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddPptOrder;
