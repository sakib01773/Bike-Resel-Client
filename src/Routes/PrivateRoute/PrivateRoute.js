import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Privateroute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spiner></Spiner>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Privateroute;