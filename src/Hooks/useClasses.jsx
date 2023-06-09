import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import AuthProviders, { AuthContext } from '../providers/AuthProviders';


const useClasses = () => {
    const {user} = useContext(AuthContext)
    
    const { refetch, data: clas = []  } = useQuery({
        queryKey: ['class'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/allClasses')
            return res.json()
        }
      })
      return [clas, refetch]
};

export default useClasses;