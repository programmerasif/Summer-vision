import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    const {data: isUser, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isUser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            // if (!user) {
            //     return false
            // }
            const res = await axiosSecure.get(`/user/user/${user?.email}`);
            
            return res.data.users;
        }
    })
    return [isUser, isAdminLoading]
}

export default useUser;