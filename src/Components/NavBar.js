import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles['left-items']}>
                <a href="" >
                    <img src="/external/primaryi322-c8z6.svg" className={styles['images']} />
                </a>
                <a href="">About</a>
                <a href="">Donate</a>
                <a href="">FAQ</a>
            </div>
            <div className={styles['right-items']}>
                <a href="" >
                    <img src="/external/cogregular361i322-4zte-200w.png" className={styles['images']} />
                </a>
                <a href="">
                    <img src="/external/primaryi322-dezm.svg" className={styles['images']} />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;