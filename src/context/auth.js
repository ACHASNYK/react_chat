import React from 'react';
import { loginWithGoogle } from '../services/firebase';
import { useState } from 'react';
import { getUsers } from '../services/firebase';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const login = async () => {
        const user = await loginWithGoogle();
        const userlist = await getUsers();
        console.log(userlist)
        sessionStorage.setItem('current_users', JSON.stringify(userlist))
        if (!user) {
            alert('Please, login first')
        }

        setUser(user);
        sessionStorage.setItem('login', JSON.stringify(user));
        
        
    };

    const value = { user, login };

    return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };