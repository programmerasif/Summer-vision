import  { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

import itemLoading from '../../assets/animation_lky6b0mi.json'
import Lottie from "lottie-react";

const PrivateRout = ({children}) => {
    const {user,loading } = useContext(AuthContext)
    
    if (loading) {
        return (
            <div className='flex justify-center items-center mt-72'>
                <div>
    
            <Lottie animationData={itemLoading} loop={true} />
                </div>
       </div>
        );
    }
    if (user) {
        return children
    }
    return <Navigate to='/'/>
};

export default PrivateRout;