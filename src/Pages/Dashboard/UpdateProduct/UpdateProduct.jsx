import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const product = useLoaderData();
    const {_id} = product;
    

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const details = form.details.value;
        const tags = form.tags.value;
        const ownerName = user.displayName;
        const ownerImg = user.photoURL;
        const ownerEmail = user.email;
        const updatedProduct = {
            name,
            img,
            details,
            tags,
            ownerName,
            ownerImg,
            ownerEmail,
        };
        fetch(
            `http://localhost:5000/product/${_id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(updatedProduct),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Success!",
                  text: "Product Updated Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                setTimeout(() => {
                    navigate('/dashboard/myProduct');
                  }, 2000);
              }
            });
        
    }


    return (
        <div>
            <div>
                <h1 className='text-sm md:text-xl lg:text-2xl font-medium'>Update Product: {product.name}</h1>
            </div>
            {/* form */}
            <div className="w-11/12 px-4 py-5 ">
            <form onSubmit={handleUpdateProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                {/* right side input */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={product.name}
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input
                    type="text"
                    name="img"
                    placeholder={product.img}
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder={product.details}
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Tags</span>
                  </label>
                  <input
                    type="text"
                    name="tags"
                    placeholder={product.tags}
                    className="input input-bordered lowercase"
                    required
                  />
                </div>
                {/* left side input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Owner Name</span>
                  </label>
                  <input
                    type="text"
                    name={user.displayName}
                    placeholder={user.displayName}
                    className="input input-bordered"
                    disabled
                    required
                  />
                  <label className="label">
                    <span className="label-text">Owner Email</span>
                  </label>
                  <input
                    type="text"
                    name={user.email}
                    placeholder={user.email}
                    className="input input-bordered"
                    disabled
                    required
                  />
                  <label className="label">
                    <span className="label-text">Owner Image</span>
                  </label>
                  <input
                    type="text"
                    name={user.photoURL}
                    placeholder={user.photoURL}
                    className="input input-bordered"
                    disabled
                    required
                  />
                  
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-800 border-2 text-white">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default UpdateProduct;