import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>This is Home page</h1>
        </div>
    );
};

export default Home;