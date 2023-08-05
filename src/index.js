import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import NotFound from "./Pages/404";
import Account from "./Pages/Account";
import EditUser from "./Pages/EditUser";
import OrderWeb from "./Pages/Orderweb";
import OrderPpt from "./Pages/OrderPpt";
import OrderDesign from "./Pages/OrderDesign";
import Riwayat from "./Pages/Riwayat";
import Users from "./Pages/AllUsers";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Home/>,
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
      path: "/product/orderweb",
      element: <OrderWeb />,
    },
    {
      path: "/product/orderppt",
      element: <OrderPpt />,
    },
    {
      path: "/product/orderdesign",
      element: <OrderDesign />,
    },
    {
        path: "404",
        element: <NotFound />,
    },
    {
        path: "/account",
        element: <Account />,
    },
    {
        path: '/account/edit/:uuid',
        element: <EditUser />,
    },
    {
        path: "/riwayat",
        element: <Riwayat />,
    },
    {
        path: "/users",
        element: <Users />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
