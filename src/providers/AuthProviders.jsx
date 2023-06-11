import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile,  } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';




export const AuthContext = createContext(null);

export const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

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
    const [token,setToken] = useState('')
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                axios.post(`http://localhost:5000/jwt`,{email: currentUser.email})
                .then(data => {
                    console.log(data.data);
                    localStorage.setItem('access-token',data.data.token)
                    setToken(data.data.token)
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
        googleSignin,
        signUp,
        login,
        profileUpdate,
        logOut,
        token
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;