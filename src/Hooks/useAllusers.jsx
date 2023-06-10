import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";



const useAllusers = () => {
   const [axiosSecure] =useAxios()
    
    const { refetch, data: users = []  } = useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
            const res = await axiosSecure('/all-user')
            return res.data
        }
      })
      return [users, refetch]
};

export default useAllusers;