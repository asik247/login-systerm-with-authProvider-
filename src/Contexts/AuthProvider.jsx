import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    // Registation/signup code start here;
    const registationUsers = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userInfo = {
       registationUsers,
    }
    return (
      <AuthContext value={userInfo}> 
        {children}
      </AuthContext>
    );
};

export default AuthProvider;