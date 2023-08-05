import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['instructor', user?.email], // Corrected the queryKey to ['instructor', user?.email]
        enabled: !loading,
        queryFn: async () => {
            if (!user) {
                return false;
            }

            try {
                const url = `http://localhost:5000/user/instructors/${user?.email}`; // Corrected the endpoint URL
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
               
                return data.instractor; // Corrected the key to 'instructor'
            } catch (error) {
                console.error('Error fetching data:', error);
                return false;
            }
        }
    });

    return [isInstructor, isInstructorLoading];
}

export default useInstructor;
