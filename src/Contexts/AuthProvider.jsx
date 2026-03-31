import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const AuthProvider = ({ children }) => {

  // user state here;
  const [user,setUser] = useState(null);
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
  // Current User using onAuthStateChange;
  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
      console.log("login then user:",currentUser);
      setUser(currentUser)
    })
    return ()=> unsubcribe();
  },[])
  const userInfo = {
    registationUsers,
    logInUsers,
    loginWithGoogle,
    signOutUsers,
    user
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;