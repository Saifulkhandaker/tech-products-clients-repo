import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";
import ErrorPage from "../component/errorpage";
import ProductDetails from "../component/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import Statistics from "../Pages/AdminDashboard/Statistics/Statistics";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers/ManageUsers";
import Coupon from "../Pages/AdminDashboard/Coupon/Coupon";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tech-products-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "coupons",
        element: <Coupon></Coupon>,
      },
      // users routes
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "updateItem/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://tech-products-server.vercel.app/product/${params.id}`),
      },
      {
        path: "myProduct",
        element: <MyProduct></MyProduct>,
      },
    ],
  },
]);
