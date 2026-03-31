import React, { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import useMyHook from '../../Hooks/useMyHook';
import { AuthContext } from '../../Contexts/AuthContext';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const LogIn = () => {
  const { logInUsers,loginWithGoogle,loading } = useContext(AuthContext);
  const [emailValue, handleEmailChange] = useMyHook('');
  const [passwordValue, handlePasswordChange] = useMyHook('');
  // show user state here;
  const [user, setUser] = useState('');
  // useRef code here;
  const emailRef = useRef(null);
  // Error and success message showing;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');
  // console.log(emailValue, passwordValue);
  const loginSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    setError(false);
    logInUsers(emailValue, passwordValue)
      .then(res => {
        console.log(res.user);
        setSuccess(res.user)
        setUser(res.user)
        // Email Validation checked;
        if (!res.user.emailVerified) {
          alert('please email validate!')
        }
      }).catch(error => {
        console.log(error.message);
        setError(error.message)
      })



  }
  // Password Reset code here;
  const passwordReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    // console.log("password Rest btn clicked",email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Email Checked and password reset')
      }).catch(error => {
        console.log(error);
      })
  }
  // Login with google;
  const loginWithGoogleHandler = e=>{
    e.preventDefault();
    console.log('login with google btn clicked');
    loginWithGoogle()
    .then(res=>{
      console.log(res.user);
    }).catch(error=>{
      console.log(error.message);
    })

  }
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={loginSubmit}>
                <fieldset className="fieldset">
                  {/* Email Input field */}
                  <label className="label">Email</label>
                  <input type="email" onChange={handleEmailChange} className="input" ref={emailRef} value={emailValue} placeholder="Email" />
                  {/* Password Input field */}
                  <label className="label">Password</label>
                  <input type="password" value={passwordValue} className="input" onChange={handlePasswordChange} placeholder="Password" />
                  {/* Password Rest code here */}
                  <div onClick={passwordReset}><a className="link link-hover">Forgot password?</a></div>
                  <button disabled={loading} className="btn btn-neutral mt-4">{loading? 'logging....':'Login'}</button>
                  {/* Google */}
                  <button onClick={loginWithGoogleHandler} className="btn mt-4 mb-3 bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                  </button>
                </fieldset>
                {/* Errror and success message */}
                <div>
                  {success && <p className='text-green-500-500 font-bold mt-3'>Successfully Registation!</p>}
                  {error && <p className='text-red-500 font-bold mt-3'>{error}</p>}
                </div>
                <div>
                  New to our website ? please <NavLink className={'text-blue-600 font-bold underline text-sm'} to={'/registation'}> Registation</NavLink>
                </div>
              </form>
              <div>
                {user && <div>
                  <h2>{user.displayName}</h2>
                  <img className='w-[100px]' src={user.photoURL} alt="" />
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;