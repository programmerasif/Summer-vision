import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios';




const useClasses = () => {
    const [axiosSecure] = useAxios()
   
    
    const { refetch, data: clas = [],isLoading  } = useQuery({
        queryKey: ['class'],
        enabled: true,
        queryFn: async () =>{
            
            const res = await axiosSecure.get('/allClasses')
            return res.data
            
        }
      })
      
      return [clas, refetch,isLoading]
};

export default useClasses;