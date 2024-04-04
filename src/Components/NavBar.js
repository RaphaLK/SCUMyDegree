import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { useState } from 'react';
import DropDownMenu from "./DropDownMenu";

function NavBar() {
    const { currentUser, login, logout /*, signUp */ } = useAuth();
    const [dropDown, setDropDown] = useState(false);

    const buttonOnClick = () => {
        //currentUser ? logout : login;
        setDropDown(!dropDown)
    }
    
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
                    <button onClick={buttonOnClick} >
                        <img 
                            src="/external/primaryi322-dezm.svg" 
                            className={`${styles['images']} ${styles['button']}`} 
                            alt="My Account" 
                            title={currentUser ? `${currentUser.displayName}'s Account` : 'My Account'} 
                        />
                    </button>
                    {dropDown && (
                        <DropDownMenu/>
                    )}
                    {/* <div className={styles['dropdown-content']}>
                        {currentUser ? 
                            <div>
                                <p>{currentUser.displayName}</p>
                                <button onClick={logout}>Log Out</button>
                            </div>
                            :
                            <div>
                                <button onClick={login}>Log In</button>
                                <button onClick={signUp}>Sign Up</button>
                            </div>
                        }
                    </div> */}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;