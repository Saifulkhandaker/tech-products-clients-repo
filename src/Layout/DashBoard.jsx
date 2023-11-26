import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";


const DashBoard = () => {
    return (
        <div className="flex py-10 px-10 gap-10">
            {/* dashboard sidebar  */}
            <div className="w-64 h-screen border  bg-slate-100">
                <ul className="menu py-8 px-3 border-b border-slate-600 space-y-2 lg:text-lg">
                    <li><NavLink to="/dashboard/profile"><CgProfile></CgProfile> My Profile</NavLink></li><hr />
                    <li><NavLink to="/dashboard/addProduct"><MdAddShoppingCart></MdAddShoppingCart> Add Product</NavLink></li><hr />
                    <li><NavLink to="/dashboard/myProduct"><BsShop></BsShop> My Products</NavLink></li><hr />
                </ul>
                <ul className="menu py-8 px-3 lg:text-lg space-y-2">
                    <li><NavLink to="/"><IoHomeSharp></IoHomeSharp> Home</NavLink></li><hr />
                    <li><NavLink to="/products"><BsShop></BsShop> All Products</NavLink></li><hr />
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;