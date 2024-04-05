import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { useState } from 'react';
import DropdownMenu from "./DropdownMenu";

function NavBar() {
    const { currentUser } = useAuth();
    const [dropdown, setDropdown] = useState(false);

    const buttonOnClick = () => {
        setDropdown(!dropdown)
    }
    
    return (
        <nav className={styles.navbar}>
            <div className={styles['left-items']}>
                <Link to="/" onClick={() => setDropdown(false)}>
                    <img src="/external/primaryi322-c8z6.svg" className={styles['images']} alt="SCUMyDegree Logo" />
                </Link>
                <Link to="/">About</Link>
                <Link to="/">Donate</Link>
                <Link to="/">FAQ</Link>
            </div>
            <div className={styles['right-items']}>
                <button onClick={() => setDropdown(false)}>
                    <img src="/external/cogregular361i322-4zte-200w.png" className={styles['images']} alt="Settings" title="Settings" />
                </button>
                <div className={styles['dropdown']}>
                    <button onClick={buttonOnClick} >
                        <img 
                            src="/external/primaryi322-dezm.svg" 
                            className={`${styles['images']} ${styles['button']}`} 
                            alt="My Account" 
                            title={currentUser ? `${currentUser.displayName}'s Account` : 'My Account'} 
                        />
                    </button>
                    {dropdown && (
                        <DropdownMenu/>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;