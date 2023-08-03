import axios from 'axios';
import { useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';


const useAxios = () => {
    // const {token}= useContext(AuthContext)
    // const navigate = useNavigate(); 
  
    const axiosSecure = axios.create({
      // baseURL: 'http://localhost:5000/', 
      // baseURL: 'https://summer-vision.vercel.app/', 
       baseURL: 'https://summer-ivory.vercel.app/', //for back up 
    });
 
    useEffect(() => {

      
     
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
       
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
          console.log(config.headers);
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
    }, []);
  
    return [axiosSecure];
  };

export default useAxios;