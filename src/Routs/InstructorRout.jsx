import React, { useContext } from 'react';
import useInstructor from '../Hooks/useInstructor';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const InstructorRout = ({children}) => {
    const { user, loading } =  useContext(AuthContext)
    const [isInstractor, isAdminLoading]=  useInstructor()
    

    if(loading || isAdminLoading){
        return <p>Loading for secure</p>
    }

    if (user && isInstractor) {
        return children;
    }
    return <Navigate to="/"></Navigate>
};



export default InstructorRout;