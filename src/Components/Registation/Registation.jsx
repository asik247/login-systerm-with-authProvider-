import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import useMyHook from '../../Hooks/useMyHook';

const Registation = () => {
    // RegistationUsers Recive;
    const { registationUsers } = useContext(AuthContext);
    // custom hook code here;
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    // Error and success message showing;
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState('');
    const submitBtn = (e) => {
        e.preventDefault();
        console.log(emailValue, passwordValue);
        // Reset code;
        setError(false);
        setSuccess('');
        registationUsers(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user);

            }).catch(error => {
                console.log(error.message);
                setError(error.message)
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