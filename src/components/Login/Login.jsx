import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../firebase-init";
import { useState } from "react";
const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([])
  const [err, setErr] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)
   
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        console.log(data.user);
      })
      .catch((error) => {
        console.log("error", error);
        setErr(error.message)
      });
  };

    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        setErr('')
        setLoginSuccess(false)

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setLoginSuccess(true)
            setLoggedInUser(result.user)
        })
        .catch(err => {
            setErr(err.message)
        })
    }
    console.log('logged in user' ,loggedInUser.email)
  return (
    <div>
      <input type="password" />
      <button onClick={handleGoogleSignIn} className="btn btn-outline m-10">
        Login With Google
      </button>
      <div className="m-5">
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2>Login With Email</h2>

            {
                loginSuccess? <div>
                    <h3>User Email: <span className="bg-purple-600 text-white">{loggedInUser.email}</span></h3>
                </div>: <></>
            }

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            {
                err && <p className="text-red-700">User Not Find</p>
            }
            {
                loginSuccess && <p className="text-green-600">Login SuccessFull!</p>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
