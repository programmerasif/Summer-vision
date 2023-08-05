import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile,  } from "firebase/auth";
import app from '../firebase/firebase.config';
// import axios from 'axios';
import useAxios from '../Hooks/useAxios';




export const AuthContext = createContext(null);

export const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const [axiosSecure] = useAxios()
    const [token,setToken] = useState('')
    const googleProvider = new GoogleAuthProvider();


    
    const googleSignin = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signUp = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name,photoUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photoUrl
          })
    }
    const logOut = () => {
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // axios.post(`https://second-serer.vercel.app/jwt`,{email: currentUser.email},{
                //     headers: {
                //       'Content-Type': 'application/json', // Set the appropriate Content-Type header
                //       authorization: `Bearer ${token}`, // Include the token in the Authorization header
                //       // Add any other custom headers you need for this specific request
                //     }})
                // .then(data => {
                //     console.log(data.data);
                    
                // })
                axiosSecure.post('/jwt',{email: currentUser.email})
                .then(res => {
                    
                    localStorage.setItem('access-token',res.data.token)
                    setToken(res.data.token)
                    setloading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
           
        })
        return unsubscribe
    }, [])
    const authInfo = {
        user,
        loading,
        setloading,
        logOut,
        googleSignin,
        signUp,
        login,
        profileUpdate,
        token
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;