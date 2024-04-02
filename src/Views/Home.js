import { useState } from 'react';
import styles from './Home.module.css';
import MDButton from '../Components/MDButton';
import { Helmet } from 'react-helmet';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Home() {
    const { currentUser, login, signUp } = useAuth();
    const [major, setMajor] = useState(null);
    const [minor, setMinor] = useState(null);

    // Get Major/ Minor of current user
    const getCurrentInfo = async () => {
        if (currentUser) {
            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setMajor(docSnap.data().major);
                setMinor(docSnap.data().minor);
            }
        }
    }

    getCurrentInfo();

    return (
        <div className={styles.home}>
            <Helmet>
                <title>SCUMyDegree</title>
            </Helmet>
            <img src="/external/primary3225-xh5m.svg" className={styles['images']} alt="SCUMyDegree Logo" />
            <div className={styles.title}>
                <span className={styles['red-text']}>SCU</span>
                <span>MyDegree</span>
            </div>
            <p className={styles.description}>
                An easy way to view your degree audit.
            </p>
            {currentUser ? 
                <div>
                    <p className={styles['welcome-text']}>Welcome, {currentUser.displayName}!</p>
                    <div>
                        {major && <p className={styles['major-text']}>Major: {major}</p>}
                        {minor && <p className={styles['minor-text']}>Minor: {minor}</p>}
                    </div>
                </div>
                :
                <div className={styles['button-container']}>
                    <MDButton buttonFunc={signUp} text="Create Account" />
                    <MDButton buttonFunc={login} text="Login" />
                </div>
            }
        </div>
    );
}

export default Home;