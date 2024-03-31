import styles from './Home.module.css';
import MDButton from '../Components/MDButton';
import { Helmet } from 'react-helmet';
import { useAuth } from '../Contexts/AuthContext';

function Home() {
    const { login, signUp } = useAuth();

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
                <MDButton buttonFunc={signUp} text="Create Account" />
                <MDButton buttonFunc={login} text="Login" />
            </div>
        </div>
    );
}

export default Home;