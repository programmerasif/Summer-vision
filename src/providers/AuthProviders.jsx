import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);

export const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading ,setloading] = useState(true)
   

    useEffect(() =>{
      const unsubscribe =   onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            console.log(currentUser);
            setloading(false)
        })
        return unsubscribe
    },[])

    const signUp = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        signUp,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;