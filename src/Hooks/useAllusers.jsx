import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";



const useAllusers = () => {
   const [axiosSecure] =useAxios()
   const {user,loading} = useContext(AuthContext)
    
    const { refetch, data: users = []  } = useQuery({
        queryKey: ['user'],
        enabled: !loading,
        queryFn: async () =>{
            // if (!user) {
            //     return []
            // }
            const res = await axiosSecure.get('/all-user') //8/4/2023 Todo
            return res.data
        }
      })
      return [users, refetch]
};

export default useAllusers;