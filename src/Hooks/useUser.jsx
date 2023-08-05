import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {user,loading} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const {data: isUser, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isUser', user?.email],
        enabled: !loading || !isUser,
        queryFn: async () => {
            const url = `http://localhost:5000/user/user/${user?.email}`; // Replace with the actual API endpoint
            const headers = {
                "Content-Type": "application/json", // Replace with the appropriate content type
                "Authorization": `Bearer ${token}`, // Optional, if you need an authorization header
              };
            const response = await fetch(url, {
                method: 'GET', 
                headers: headers,
              });

            // Handle fetch errors using .catch()
            if (!response.ok) {
                return console.error('Network response was not ok.');
                
            }

            const data = await response.json();
            
            return data.users
        }
    })
    return [isUser, isAdminLoading]
}

export default useUser;