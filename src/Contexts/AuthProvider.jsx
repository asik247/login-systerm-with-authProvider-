import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const AuthProvider = ({ children }) => {


  const provider = new GoogleAuthProvider();
  // Registation/signup code start here;
  const registationUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // LogIn/SignIn code start here;
  const logInUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // LogIn With Google code here;
  const loginWithGoogle = () => {
    return signInWithPopup(auth,provider)
  }
  // Sign out users code start here;
  const signOutUsers = ()=>{
    return signOut(auth)
  }
  const userInfo = {
    registationUsers,
    logInUsers,
    loginWithGoogle,
    signOutUsers
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;