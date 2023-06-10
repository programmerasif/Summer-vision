import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useMyclasses = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxios()
    
    const { refetch, data: Myclas = []  } = useQuery({
        queryKey: ['Myclass'],
        
        queryFn: async () =>{
            const res = await axiosSecure.get(`/myclasses?email=${user?.email}`)
            return res.data
        }
      })
      return [Myclas, refetch]
};

export default useMyclasses;