import React, { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import useMyHook from '../../Hooks/useMyHook';
import { AuthContext } from '../../Contexts/AuthContext';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const LogIn = () => {
  const { logInUsers } = useContext(AuthContext);
  const [emailValue, handleEmailChange] = useMyHook('');
  const [passwordValue, handlePasswordChange] = useMyHook('');
  // show user state here;
  const [user,setUser] = useState('');
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
        if(!res.user.emailVerified){
          alert('please email validate!')
        }
      }).catch(error => {
        console.log(error.message);
        setError(error.message)
      })



  }
  // Password Reset code here;
  const passwordReset = (e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    // console.log("password Rest btn clicked",email);
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      alert('Email Checked and password reset')
    }).catch(error=>{
      console.log(error);
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
                  <button className="btn btn-neutral mt-4">Login</button>
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