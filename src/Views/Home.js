import styles from './Home.module.css';
import MDButton from '../Components/MDButton';
import { Helmet } from 'react-helmet';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../firebase';

const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const email = result.user.email;
    
        if (email.endsWith('@scu.edu')) {
            window.location.href = '/majors';
        } else {
            alert('Please use your SCU email to login.');
        }
    } catch (error) {
        console.error(error);
    }
}

function Home() {
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
            <div className={styles['button-container']}>
                <MDButton text="Create Account" />
                <MDButton buttonFunc={googleLogin} text="Login" />
            </div>
        </div>
    );
}

export default Home;