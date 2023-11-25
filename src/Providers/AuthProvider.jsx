import { useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";







export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // google signin
    const googleSignIn = (value)  => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }



    const authInfo = {
        user,
        loading,
        googleSignIn    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;