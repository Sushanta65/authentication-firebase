import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase-init";
import { useState } from "react";
const Login = () => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState([])


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(data => {
            setUser(data.user)
            console.log(data.user)
        })
        .catch(error => {
            console.log("error", error)
        })
        
    }

    return (
        <div>
            <input type="password" />
            <button onClick={handleGoogleSignIn} className="btn btn-outline m-10">Login With Google</button>
            <div className="m-5">
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default Login;