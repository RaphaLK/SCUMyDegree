import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider( { children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoading(false);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const login = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const email = result.user.email;

            if (email.endsWith('@scu.edu')) {
                navigate('/majors');
            } else {
                alert('Please use your SCU email to login.');
                await logout();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            await auth.signOut();
            alert('Logged out successfully');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    const value = {
        currentUser,
        login,
        logout
    }

    return ( // Loading the page only after the user has been authenticated
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}