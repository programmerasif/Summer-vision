import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const useAxios = () => {
    const {logOut}= useContext(AuthContext)
    const navigate = useNavigate(); 
  
    const axiosSecure = axios.create({
      baseURL: 'http://localhost:5000', 
    });
 
    useEffect(() => {
     
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        console.log(token);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.log('something is wrong');
          }
          return Promise.reject(error);
        }
      );
    }, [logOut, navigate, axiosSecure]);
  
    return [axiosSecure];
  };

export default useAxios;