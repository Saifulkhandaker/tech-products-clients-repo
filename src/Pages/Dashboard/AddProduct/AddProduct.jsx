import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const details = form.details.value;
        const tags = form.tags.value;
        const ownerName = user.displayName;
        const ownerImg = user.photoURL;
        const ownerEmail = user.email;
        const newProduct = {
            name,
            img,
            details,
            tags,
            ownerName,
            ownerImg,
            ownerEmail,
        };

        // send date to the server
    fetch(
        "http://localhost:5000/newProduct",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Product Added Successfully",
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
                <h1 className='text-2xl font-medium'>Add Product</h1>
            </div>
            {/* form */}
            <div className="w-11/12 px-4 py-5 ">
            <form onSubmit={handleAddProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                {/* right side input */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input
                    type="text"
                    name="img"
                    placeholder="Img Url"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Product Destails"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Tags</span>
                  </label>
                  <input
                    type="text"
                    name="tags"
                    placeholder="Enter Tags"
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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default AddProduct;