import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useMyclasses = () => {
    const {user} = useContext(AuthContext)
    
    const { refetch, data: Myclas = []  } = useQuery({
        queryKey: ['Myclass'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/myclasses?email=${user?.email}`)
            return res.json()
        }
      })
      return [Myclas, refetch]
};

export default useMyclasses;