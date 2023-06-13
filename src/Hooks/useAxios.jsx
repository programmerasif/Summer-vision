import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const useAxios = () => {
    const {logOut,token}= useContext(AuthContext)
    const navigate = useNavigate(); 
  
    const axiosSecure = axios.create({
      baseURL: 'http://localhost:5000/', 
      // baseURL: 'https://server-project-theta.vercel.app/', 
    });
 
    useEffect(() => {

      
     
      axiosSecure.interceptors.request.use((config) => {
        // const token = localStorage.getItem('access-token');
       
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // logOut()
            // navigate('/login')
          }
          return Promise.reject(error);
        }
      );
    }, [logOut, navigate, axiosSecure,token]);
  
    return [axiosSecure];
  };

export default useAxios;