import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider} from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading]= useState(true);

    const auth = getAuth();
    const googoleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    // Sign In Using Google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googoleProvider)
                .finally(() => setIsLoading(false))
    };

    // sign In With Email And Password 

    /* const registrattionEmailandPassWord = () =>{
        signInWithEmailAndPassword(auth, email, )
    } */

    // sign in with git hub

    const signInUsingGithub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
                .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user=> {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unSubscribed;
    } ,[auth]);

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=>{ })
        .finally(()=> setIsLoading(false))
    };

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut
    }


    
};

export default useFirebase;