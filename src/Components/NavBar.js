import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles['left-items']}>
                <Link to="/">
                    <img src="/external/primaryi322-c8z6.svg" className={styles['images']} alt="SCUMyDegree Logo" />
                </Link>
                <a href="/">About</a>
                <a href="/">Donate</a>
                <a href="/">FAQ</a>
            </div>
            <div className={styles['right-items']}>
                <a href="/" >
                    <img src="/external/cogregular361i322-4zte-200w.png" className={styles['images']} alt="Settings" />
                </a>
                <a href="/">
                    <img src="/external/primaryi322-dezm.svg" className={styles['images']} alt="My Account" />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;