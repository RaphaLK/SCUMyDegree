import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc, } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider( { children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true); // loading is true until the user is authenticated

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoading(false);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const signUp = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider); // Sign in with Google

            if (result.user.email.endsWith('@scu.edu')) { // If the user has an SCU email
                const docRef = doc(db, 'users', result.user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) { // If the user already has an account
                    alert('Account already exists.');
                    navigate('/');
                    return;
                }

                await setDoc(docRef, { // Create a new account in the database
                    name: result.user.displayName,
                    uid: result.user.uid,
                    email: result.user.email,
                    school: null,
                    major: null,
                    minor: null
                });
    
                navigate('/majors'); // Redirect to the majors page
            } else { // If the user does not have an SCU email
                await logout(false);
                alert('Please use your SCU email to login.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const login = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider); // Sign in with Google
            const email = result.user.email;
            const uid = result.user.uid;

            if (email.endsWith('@scu.edu')) { // If the user has an SCU email
                const docRef = doc(db, 'users', uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) { // If the user has an account
                    navigate('/');
                } else { // If the user does not have an account
                    await logout(false);
                    alert('Please create an account first.');
                }
            } else { // If the user does not have an SCU email
                await logout(false);
                alert('Please use your SCU email to login.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async (notify = true) => {
        try {
            await auth.signOut();
            setCurrentUser(null);

            if (notify) { // if the user should be notified
                alert('Logged out successfully');
            }

            navigate('/'); // Redirect to the home page
        } catch (error) {
            console.error(error);
        }
    }

    const value = {
        currentUser,
        login,
        logout, 
        signUp
    }

    return ( // Loading the page only after the user has been authenticated
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}