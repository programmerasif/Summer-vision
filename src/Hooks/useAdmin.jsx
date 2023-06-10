import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin;