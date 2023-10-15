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
            const url = `https://project-summer-5h81.vercel.app/user/user/${user?.email}`; 
            // const url = `http://localhost:5000/user/user/${user?.email}`; 
            const headers = {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`, 
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