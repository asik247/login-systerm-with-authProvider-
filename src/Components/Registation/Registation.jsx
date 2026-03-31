import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import useMyHook from '../../Hooks/useMyHook';
import { FaEye } from 'react-icons/fa';
import { FaEyeLowVision } from 'react-icons/fa6';

const Registation = () => {
    // RegistationUsers Recive;
    const { registationUsers } = useContext(AuthContext);
    // custom hook code here;
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    // Error and success message showing;
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState('');
    const [eye, setEye] = useState(false);
    const submitBtn = (e) => {
        e.preventDefault();
        const terms = e.target.terms.checked;
       
        console.log(emailValue, passwordValue);
        // Reset code;
        setError(false);
        setSuccess('');
        if(!terms){
            alert("please accept terms!")
            return;
        }
        registationUsers(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user);

            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    // Eye Showing code here;
    const handleEyeShowing = (e) => {
        e.preventDefault();
        setEye(!eye);
        console.log("eye btn clicked");
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

                                    <div className='relative'>
                                        {/* Password Input Field */}
                                        <label className="label">Password</label>
                                        <input type={eye ? 'text' : 'password'} value={passwordValue} onChange={handlePasswordChange} className="input" placeholder="Password" />
                                        <button onClick={handleEyeShowing} className='absolute btn btn-ghost right-1'>
                                            {eye ? <FaEye /> : <FaEyeLowVision />}
                                        </button>
                                    </div>
                                    {/* CheackBox code here */}
                                    <div>
                                        <label className="label">
                                            <input name='terms' type="checkbox" className="checkbox" />
                                            Accept me !
                                        </label>
                                    </div>

                                    <button className="btn btn-neutral mt-4">Registation</button>
                                </fieldset>
                                {/* Errror and success message */}
                                <div>
                                    {success && <p className='text-green-500-500 font-bold mt-3'>Successfully Registation!</p>}
                                    {error && <p className='text-red-500 font-bold mt-3'>{error}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;