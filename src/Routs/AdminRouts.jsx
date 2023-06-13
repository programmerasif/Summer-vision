import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import useAdmin from '../Hooks/useAdmin';

const AdminRouts = ({children}) => {
    const { user, loading } =  useContext(AuthContext)
    const [isAdmin, isAdminLoading]=  useAdmin()
    

    if(loading || isAdminLoading){
        return <p>Loading for secure</p>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default AdminRouts;