import "../styles/pages/Riwayat.css";
import Navbar from "../components/Fragments/Navbar";
import axios from "axios";
import Button from "../components/Elements/Button";
import { useState, useEffect } from "react";

const Riwayat = () => {
    const [productWeb, setProductWeb] = useState([]);
    const [productPpt, setProductPpt] = useState([]);
    const [productDesign, setProductDesign] = useState([]);
    const [proses, setProses] = useState("Proses");
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        getProduct();
        setProses()
    }, []);

    const getProduct = async () => {
        const responseWeb = await axios.get("http://localhost:5000/website");
        const responsePpt = await axios.get("http://localhost:5000/PPT");
        const responseDesign = await axios.get("http://localhost:5000/Design");
        setProductWeb(responseWeb.data);
        setProductPpt(responsePpt.data);
        setProductDesign(responseDesign.data);
    };

    const deleteProductWeb = async (ProductId) => {
        await axios.delete(`http://localhost:5000/website/${ProductId}`);
        getProduct();
    };
    const deleteProductPpt = async (ProductId) => {
        await axios.delete(`http://localhost:5000/PPT/${ProductId}`);
        getProduct();
    };
    const deleteProductDesign = async (ProductId) => {
        await axios.delete(`http://localhost:5000/Design/${ProductId}`);
        getProduct();
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <h1>Riwayat</h1>
                    <div>
                        <button onClick={() => handleTabClick("Web")}>Web</button>
                        <button onClick={() => handleTabClick("PPT")}>PPT</button>
                        <button onClick={() => handleTabClick("Design")}>Design</button>
                    </div>
                </div>
                <div>
                    <table style={{ border: "5px solid black" }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Pesanan</th>
                                <th>Nomor Hp</th>
                                <th>Harga</th>
                                <th>Nama Pemesan</th>
                                <th>Hasil</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeTab === "Web" &&
                                productWeb.map((product, index) => (
                                    <tr key={product.uuid}>
                                        <td>{index + 1}</td>
                                        <td>{product.jenis_web}</td>
                                        <td>{product.nomor_hp}</td>
                                        <td>{product.harga}</td>
                                        <td>{product.user.name}</td>
                                        <Button title="Proses"></Button>
                                        <Button title="Delete" onClick={() => deleteProductWeb(product.uuid)}></Button>
                                    </tr>
                                ))}
                            {activeTab === "PPT" &&
                                productPpt.map((product, index) => (
                                    <tr key={product.uuid}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {product.pelajaran_ppt} {product.materi_ppt}
                                        </td>
                                        <td>{product.nomor_hp}</td>
                                        <td>{product.harga}</td>
                                        <td>{product.user.name}</td>
                                        <td>{proses}</td>
                                        <Button title="Delete" onClick={() => deleteProductPpt(product.uuid)}></Button>
                                    </tr>
                                ))}
                            {activeTab === "Design" &&
                                productDesign.map((product, index) => (
                                    <tr key={product.uuid}>
                                        <td>{index + 1}</td>
                                        <td>{product.jenis_design}</td>
                                        <td>{product.nomor_hp}</td>
                                        <td>{product.harga}</td>
                                        <td>{product.user.name}</td>
                                        <td>{proses}</td>
                                        <Button title="Delete" onClick={() => deleteProductDesign(product.uuid)}></Button>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Riwayat;
