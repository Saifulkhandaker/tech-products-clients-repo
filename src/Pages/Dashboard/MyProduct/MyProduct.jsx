import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyProduct = () => {

    const [products] = useProducts();
    const myProducts = products.filter(product => product.ownerName);
    console.log(myProducts);
    

    return (
        <div>
            <div className="border shadow-xl bg-white py-10 px-5 mt-5">
                <div className="flex justify-between">
                    <h2 className=" text-xl lg:text-3xl font-medium">My Products: {myProducts.length}</h2>
                </div>
                {/* items table */}
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                    {/* head */}
                    <thead className="bg-[#94A3B8] text-white rounded-t-full">
                        <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Votes</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        myProducts.map((item, index) => <tr key={item._id}>
                            <th>
                            { index+1 }
                            </th>
                            <td>{item.name}</td>
                            <td className="text-xs md:text-sm lg:text-lg p-0">0</td>
                            <td>Pending</td>
                            <td>
                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                <button>
                                <FaEdit className="items-center text-4xl text-white bg-[#D1A054] py-2 pl-1 rounded-lg"></FaEdit>
                                </button> 
                                </Link>
                            </td>
                            <th>
                            <button onClick={() => handleDelete(item._id)} 
                            className="btn btn-ghost text-lg text-white bg-[#B91C1C] font-bold"><FaTrashAlt></FaTrashAlt>
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

export default MyProduct;