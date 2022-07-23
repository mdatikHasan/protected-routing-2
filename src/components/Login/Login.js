import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const [gUser, setGUser] = useState({})
    const {signInUsingGoogle, signInUsingGithub} = useAuth()
    console.log(gUser);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            setGUser(result.user)
        })
    }

    const handleGithubSignIn = () => {
        signInUsingGithub()
        .then(result => {
            setGUser(result.user)
        })
    }

    useEffect(() => {
        if(gUser?.displayName){
            navigate(from, {replace: true});
        }
    } ,[from, gUser, navigate])
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>GitHub Sign In</button>
        </div>
    );
};

export default Login;