import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {




  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      
        <div className="hero my-10">
          <div className="hero-content flex-col border border-black py-3 px-5">
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
                    <button className="btn w-full text-black bg-none border-black">
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
