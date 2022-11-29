import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyDashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-3xl my-10 mx-10">WelCome to : {user.email}</h2>
        </div>
    );
};

export default MyDashboard;