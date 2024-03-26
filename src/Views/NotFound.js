import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css'
import { Helmet } from 'react-helmet'

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    }, [navigate]);

    return (
        <div className={styles["not-found-container"]}>
            <Helmet>
                <title>404 - Not Found</title>
            </Helmet>
            <h3>OOPS! PAGE NOT FOUND</h3>
            <div className={styles["not-found-container1"]}>
                <h1 className={styles["not-found-text1"]}>404</h1>
            </div>
            <div className={styles["not-found-container2"]}>
                <h2 className={styles["not-found-text2"]}>
                WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
                </h2>
            </div>
        </div>
    );
}

export default NotFound;