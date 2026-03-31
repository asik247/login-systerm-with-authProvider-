import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import useMyHook from '../../Hooks/useMyHook';

const Registation = () => {
// RegistationUsers Recive;
const {registationUsers} = useContext(AuthContext);
// custom hook code here;
const [emailValue,handleEmailChange] = useMyHook('');
const [passwordValue,handlePasswordChange] = useMyHook('');
const submitBtn = (e)=>{
    e.preventDefault();
    console.log(emailValue,passwordValue);
    registationUsers(emailValue,passwordValue)
    .then(res=>{
        console.log(res.user);
    }).catch(error=>{
        console.log(error.message);
    })
}
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Registation now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={submitBtn}>
                                <fieldset className="fieldset">
                                    {/* Email Input Field */}
                                    <label className="label">Email</label>
                                    <input type="email" value={emailValue} onChange={handleEmailChange} className="input" placeholder="Email" />
                                    {/* Password Input Field */}
                                    <label className="label">Password</label>
                                    <input type="password" value={passwordValue} onChange={handlePasswordChange} className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Registation</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;