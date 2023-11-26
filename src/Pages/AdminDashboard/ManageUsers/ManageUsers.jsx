import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


  // handle makeAdmin 
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is Admin Now`,
                showConfirmButton: false,
                timer: 1500
              }); 
        }
    })
}




  // handle delete user
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete User!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Order Item Deleted",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="border shadow-xl bg-white py-10 px-5">
        <div>
          <h2 className=" text-xl lg:text-3xl font-medium">
            Total Users: {users.length}
          </h2>
        </div>
        {/* items table */}
        <div className="overflow-x-auto mt-4">
          <table className="table">
            {/* head */}
            <thead className="bg-slate-400 text-white rounded-t-full">
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td className="text-xs md:text-sm lg:text-lg">{user.name}</td>
                  <td className="text-xs md:text-sm lg:text-lg p-0">
                    {user.email}
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <span className="text-lg font-bold text-green-900">
                        Admin
                      </span>
                    ) : (
                      <button onClick={() => handleMakeAdmin(user)}>
                        <FaUsers className="items-center text-4xl text-white bg-[#D1A054] p-2"></FaUsers>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost text-xl text-red-600 font-bold"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
