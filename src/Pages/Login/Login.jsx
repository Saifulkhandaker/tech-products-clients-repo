import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const {googleSignIn, signIn}= useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]= useState(''); 




  const navigate = useNavigate()

  // handle google sign in
  const handleGoogle = () => {
    googleSignIn()
    .then(result => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        Swal.fire({
          title: 'Success!',text: 'Successfully logged in',icon: 'success',confirmButtonText: 'Cool' });
          setTimeout(() => {
            navigate('/');
          }, 3000);
      })
      
    })
  }


// handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if((email, password)){
      signIn(email, password)
      .then(result => {
        setError('');
        Swal.fire({
          title: 'Success!',text: 'Successfully logged in',icon: 'success',confirmButtonText: 'Cool' });
          setTimeout(() => {
            navigate(location?.state ? location.state : '/');
          }, 3000);
      })
      .catch((err) => {
        setError('Invalid email or password');
        Swal.fire({
          title: 'Error!',text: 'Invalid email or password',icon: 'error',confirmButtonText: 'Error' });
      })
    }  
 }

  return (
    <div className="w-11/12 mx-auto">
        <div className="hero my-10">
          <div className="hero-content flex-col border border-black py-5 px-10">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-black">Login</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-black bg-none border-black">Login</button>
                  <p>
                    or sign with <br />
                    <button onClick={handleGoogle} className="btn w-full text-black bg-none border-black">
                    <FaGoogle /> Google
                    </button>
                  </p>
                </div>
              </form>
              <p>
                Don't have an account!!!! Please__{" "}
                <Link className="text-green-800 font-bold" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;
