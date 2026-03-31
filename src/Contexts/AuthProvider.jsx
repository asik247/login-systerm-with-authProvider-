import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    // Registation/signup code start here;
    const registationUsers = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // LogIn/SignIn code start here;
    const logInUsers = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
       registationUsers,
       logInUsers
    }
    return (
      <AuthContext value={userInfo}> 
        {children}
      </AuthContext>
    );
};

export default AuthProvider;