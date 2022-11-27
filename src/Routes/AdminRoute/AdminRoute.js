import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmmin from '../../hocks/useAdmin';

const AdminRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const [isAdmin, isAdminLoading] = useAdmmin(user?.email)

    console.log(isAdminLoading)
    console.log(isAdmin)
    // console.log(user, isAdmin)

    const location = useLocation()

    if(loading || isAdminLoading){
       
       return <Spiner></Spiner>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default AdminRoutes;