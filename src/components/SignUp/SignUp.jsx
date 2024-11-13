import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase-init";
import { useState } from "react";

const SignUp = () => {
    const [errMessage, setErrMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setErrMessage('')
        setSuccess(false)

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            setSuccess(true)
        })
        .catch(err => {
            setErrMessage(err.message)
        })
    }

  return (

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2>Sign Up Now</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name = 'email'
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
                name = 'password'
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
                errMessage && <p className="text-red-600">User Already Exist.</p>
            }
            {
                success && <p className="text-green-700">Sign Up Successfull.</p>
            }
          </form>
        </div>
      
    </div>
  );
};

export default SignUp;
