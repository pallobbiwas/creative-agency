import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../images/logos/logo.png";


const Login = () => {
  const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);

  const[user] = useAuthState(auth);
  const navigated = useNavigate()

  if(user){
      navigated('/')
  }

  const googleLogin = () => {
    signInWithGoogle()
  }
  return (
    <div className="container mx-auto">
      <div className="w-6/12 bg-yellow-100 mx-auto p-6 mt-32 rounded-lg shadow-2xl">
        <div className="">
          <img className="w-44 mx-auto mb-2" src={img} alt="" />
          <hr />
        </div>
        <div className="text-center">
          <button onClick={googleLogin} className="btn btn-primary px-10 rounded-md mt-10">
            Google log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
