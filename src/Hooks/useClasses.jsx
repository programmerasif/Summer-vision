import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';



const useClasses = () => {
    const [axiosSecure] = useAxios()
    const {user} =useContext(AuthContext)
    
    const { refetch, data: clas = []  } = useQuery({
        queryKey: ['class'],
        queryFn: async () =>{
            if (!user) {
                return []
            }
            const res = await axiosSecure.get('/allClasses')
            return res.data
            // return res.json()
        }
      })
      return [clas, refetch]
};

export default useClasses;