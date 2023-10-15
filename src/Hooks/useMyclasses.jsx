import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';


const useMyclasses = () => {
    const {user,loading} = useContext(AuthContext)
    
    const token = localStorage.getItem('access-token');
    const { refetch, data: Myclas = []  } = useQuery({
        queryKey: ['Myclass'],
        enabled: !loading,
        queryFn: async () =>{
            
            // const res = await axiosSecure.get(`/myclasses?email=${user?.email}`)
            // return res.data

            try {
                // const url = `http://localhost:5000/myclasses?email=${user?.email}`;
                const url = `https://project-summer-5h81.vercel.app/myclasses?email=${user?.email}`;
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

                const res = await response.json();
                
                return res;
            } catch (error) {
               
                return  console.error('Error fetching data:', error);
            }
            
        }
      })
      return [Myclas, refetch]
};

export default useMyclasses;