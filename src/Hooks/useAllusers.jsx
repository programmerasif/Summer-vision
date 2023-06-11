import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";



const useAllusers = () => {
   const [axiosSecure] =useAxios()
   const {user} = useContext(AuthContext)
    
    const { refetch, data: users = []  } = useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
            if (!user) {
                return []
            }
            const res = await axiosSecure('/all-user')
            return res.data
        }
      })
      return [users, refetch]
};

export default useAllusers;