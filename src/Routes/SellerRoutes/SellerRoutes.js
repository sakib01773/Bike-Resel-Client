import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hocks/useSeller';


const SellerRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const [isSeller, isSellerLoading] = useSeller(user?.email)

    const location = useLocation()

    if(loading || isSellerLoading){
        return <Spiner></Spiner>
    }

    if(user && isSeller){
        return children
    }

    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default SellerRoutes;