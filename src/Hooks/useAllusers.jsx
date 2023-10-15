import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";



const useAllusers = () => {
   const [axiosSecure] =useAxios()
   const {user,loading} = useContext(AuthContext)
   const token = localStorage.getItem('access-token')
    const { refetch, data: users = []  } = useQuery({
        queryKey: ['user'],
        enabled: !loading,
        queryFn: async () =>{
            
            // const res = await axiosSecure.get('/all-user') //8/4/2023 Todo
            // return res.data
            try {
                // const url = `http://localhost:5000/all-user`;
                const url = `https://project-summer-5h81.vercel.app/all-user`;
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
                
                return data;
            } catch (error) {
               
                return  console.error('Error fetching data:', error);
            }
        }
      })
      return [users, refetch]
};

export default useAllusers;