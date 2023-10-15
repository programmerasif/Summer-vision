import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (!user) {
                return false;
            }

            try {
                // const url = `http://localhost:5000/user/admin/${user.email}`;
                const url = `https://project-summer-5h81.vercel.app/user/admin/${user.email}`;
                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                };
                const response = await fetch(url, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const data = await response.json();
                
                return data.admin;
            } catch (error) {
               
                return  console.error('Error fetching data:', error);
            }
        }
    });

    return [isAdmin, isAdminLoading];
}


export default useAdmin;