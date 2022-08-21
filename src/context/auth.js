import React from 'react';
import { loginWithGoogle } from '../services/firebase';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null);

    const login = async () => {
        const user = await loginWithGoogle();

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