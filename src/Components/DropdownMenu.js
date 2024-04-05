import styles from './DropdownMenu.module.css';
import DropdownItem from './DropdownItem';
import { useAuth } from '../Contexts/AuthContext';

function DropdownMenu() {
    const { currentUser, login, logout , signUp } = useAuth();

    console.log(currentUser);
    
    return (
        <div className={styles['dropdown-menu-view-container']}>
                {currentUser && <h1>{currentUser.displayName}</h1>}
                <ul>
                    <DropdownItem
                        image='/external/primaryi322-c8z6.svg' 
                        desc='Edit Degree'
                    />
                </ul>
                {currentUser && <ul>
                    <DropdownItem
                        image='/external/primaryi322-c8z6.svg' 
                        desc='Log Out'
                        action={logout}
                    />
                </ul>}
                {!currentUser && <ul>
                    <DropdownItem
                        image='/external/primaryi322-c8z6.svg' 
                        desc='Log In'
                        action={login}
                    />
                </ul>}
                {!currentUser && <ul>
                    <DropdownItem
                        image='/external/primaryi322-c8z6.svg' 
                        desc='Sign Up'
                        action={signUp}
                    />
                </ul>}
        </div>
    );
}

export default DropdownMenu