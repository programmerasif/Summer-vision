import  { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate } from 'react-router-dom';



const PrivateRout = ({children}) => {
    const {user,loading } = useContext(AuthContext)
    
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to='/'/>
};

export default PrivateRout;