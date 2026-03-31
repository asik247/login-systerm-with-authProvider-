import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
       return <p>Loadding..</p>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;