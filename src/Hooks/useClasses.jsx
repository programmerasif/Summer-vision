import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios';



const useClasses = () => {
    const [axiosSecure] = useAxios()
    
    const { refetch, data: clas = []  } = useQuery({
        queryKey: ['class'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/allClasses')
            return res.data
            // return res.json()
        }
      })
      return [clas, refetch]
};

export default useClasses;