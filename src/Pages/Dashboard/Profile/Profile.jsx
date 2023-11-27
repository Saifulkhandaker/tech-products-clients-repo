import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Profile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="lg:mt-28 md:mt-16 mt-10">
            <div className="bg-[#F2F2F4] lg:flex lg:items-center lg:text-left gap-5 border border-slate-500 py-5 lg:px-10 md:px-20 px-3 text-center">
                <img className="w-72 rounded-lg" src={user.photoURL} alt="" />
                <div className="space-y-3">
                    <h1 className="lg:text-5xl md:text-3xl lg:mt-0 mt-5">{user.displayName}</h1>
                    <h1 className="lg:text-xl md:text-lg">{user.email}</h1>
                    <button className="btn rounded-lg border-black">Subscribe /10$(month)</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;