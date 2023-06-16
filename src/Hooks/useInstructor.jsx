import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useInstructor = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    const {data: isInstractor, isLoading: isAdminLoading} = useQuery({
        queryKey: ['instractor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            // if (!user) {
            //     return false
            // }
            const res = await axiosSecure.get(`/user/instractor/${user?.email}`);
            return res.data.instractor;
        }
    })
    return [isInstractor, isAdminLoading]
}

export default useInstructor;