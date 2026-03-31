import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import useMyHook from '../../Hooks/useMyHook';
import { FaEye } from 'react-icons/fa';
import { FaEyeLowVision } from 'react-icons/fa6';
import { NavLink } from 'react-router';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Registation = () => {
    // RegistationUsers Recive;
    const { registationUsers,loading } = useContext(AuthContext);
    // custom hook code here;
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    const [nameValue, handleNameChange] = useMyHook('');
    const [photoValue, handlePhotoChange] = useMyHook('');
    // Error and success message showing;
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState('');
    const [eye, setEye] = useState(false);
    const submitBtn = (e) => {
        e.preventDefault();
        // Terms code here;
        const terms = e.target.terms.checked;
        // regEx validation code here;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        console.log(emailValue, passwordValue);
        // Reset code;
        setError(false);
        setSuccess('');
        // Email , passowrd validation code here;
        if (!emailRegex.test(emailValue)) {
            alert("Invalid Email ❌");
            return;
        }
        if (!passwordRegex.test(passwordValue)) {
            alert("Password must be strong ❌");
            return;
        }
        // Terms condition code;
        if (!terms) {
            alert("please accept terms!")
            return;
        }
        registationUsers(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user);
                // Email varification code here;
                sendEmailVerification(res.user)
                    .then(() => {
                        alert("Checked your email then login")
                    }).catch(error => {
                        console.log(error);
                    })
                // update profile code here;
                const profile = {
                    displayName: nameValue,
                    photoURL: photoValue
                }
                updateProfile(res.user, profile)

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
                                    {/* Name Input Field */}
                                    <label className="label">Name</label>
                                    <input type="text" value={nameValue} onChange={handleNameChange} className="input" placeholder="Your Name" />
                                    {/* Photo Input Field */}
                                    <label className="label">Photo</label>
                                    <input type="text" value={photoValue} onChange={handlePhotoChange} className="input" placeholder="PhotoURL" />

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

                                    <button disabled={loading} className="btn btn-neutral mt-4">{loading ? 'creatting...':'Registation'}</button>
                                </fieldset>
                                {/* Errror and success message */}
                                <div>
                                    {success && <p className='text-green-500-500 font-bold mt-3'>Successfully Registation!</p>}
                                    {error && <p className='text-red-500 font-bold mt-3'>{error}</p>}
                                </div>
                                <div className='mt-3'>
                                    Already have'n account ? please <NavLink className={'text-blue-600 font-bold underline text-sm'} to={'/login'}> Login</NavLink>
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