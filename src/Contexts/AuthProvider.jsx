import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo = {
        name:'ar',
        age:20
    }
    return (
      <AuthContext value={userInfo}> 
        {children}
      </AuthContext>
    );
};

export default AuthProvider;