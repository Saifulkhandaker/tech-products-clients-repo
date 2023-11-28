import { useEffect, useState } from 'react';
import { FaDollarSign, FaEdit, FaTrashAlt } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";

const Coupon = () => {

    const [coupon, setCoupon] = useState([]);
    
    useEffect(() => {
        fetch('https://tech-products-server.vercel.app/coupon')
        .then(res => res.json())
        .then(data => {
            setCoupon(data)
        })
    }, [])

    return (
        <div>
            <div className="border shadow-xl bg-white py-10 px-5 mt-5">
                <div className="flex justify-between">
                    <h2 className=" text-xl lg:text-3xl font-medium">Total Coupons: {coupon.length}</h2>
                </div>
                {/* items table */}
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                    {/* head */}
                    <thead className="bg-[#94A3B8] text-white rounded-t-full">
                        <tr>
                        <th>#</th>
                        <th>Coupon Code</th>
                        <th>Expiry Date</th>
                        <th>D Amount</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        coupon.map((item, index) => <tr key={item._id}>
                            <th>
                            { index+1 }
                            </th>
                            <td className='flex items-center mt-3 gap-2  font-medium'><RiCoupon2Line className='text-xl font-medium text-red-700'></RiCoupon2Line>{item.coupon_code}</td>
                            <td className="text-xs md:text-sm lg:text-lg p-0">{item.expiration_date}</td>
                            <td className="text-xs md:text-sm lg:text-lg p-0 flex items-center font-medium text-green-700"><FaDollarSign/>{item.discount_amount}</td>
                            <td>
                                <button>
                                <FaEdit className="items-center text-4xl text-white bg-[#D1A054] py-2 pl-1 rounded-lg"></FaEdit>
                                </button> 
                            </td>
                            <th>
                            <button
                            className="btn btn-ghost text-lg text-white bg-[#B91C1C] "><FaTrashAlt></FaTrashAlt>
                            </button>
                            </th>
                        </tr>)
                    }
                        
                    </tbody>
                    
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Coupon;