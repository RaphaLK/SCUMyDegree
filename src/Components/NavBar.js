import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

function NavBar() {
    const { currentUser, login, logout } = useAuth();

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
                <button >
                    <img src="/external/cogregular361i322-4zte-200w.png" className={styles['images']} alt="Settings" title="Settings" />
                </button>
                <div className={styles['dropdown']}>
                    <button onClick={currentUser ? logout : login}>
                        <img 
                            src="/external/primaryi322-dezm.svg" 
                            className={`${styles['images']} ${styles['button']}`} 
                            alt="My Account" 
                            title={currentUser ? `${currentUser.displayName}'s Account` : 'My Account'} 
                        />
                    </button>
                    {/*
                    <div className={styles['dropdown-content']}>
                        {currentUser ? 
                            <div>
                                <p>{currentUser.displayName}</p>
                                <button onClick={handleLogout}>Log Out</button>
                            </div>
                            :
                            <Link to="/login">Log In</Link>
                        }
                    </div>
                    */}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;