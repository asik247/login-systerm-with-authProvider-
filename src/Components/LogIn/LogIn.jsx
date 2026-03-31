import React from 'react';
import { NavLink } from 'react-router';

const LogIn = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <div>
                New to our website ? please <NavLink className={'text-blue-600 font-bold underline text-sm'} to={'/registation'}> Registation</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;