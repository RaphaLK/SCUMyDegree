import styles from './Home.module.css';
import MDButton from './MDButton';

function Home() {
    return (
        <div className={styles.home}>
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
                <MDButton text="Login" />
            </div>
        </div>
    );
}

export default Home;