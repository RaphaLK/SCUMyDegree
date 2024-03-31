import { useEffect } from 'react';
import styles from './MajorPage.module.css';
import MajorSection from '../Components/MajorSection';
import majorSections from '../Constants/majors';
import { Helmet } from 'react-helmet';
import { auth } from '../firebase';

function MajorPage() {
    // log user id 
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
            }
        });
    }, [])

    return (
        <div className={styles['major-page']}>
            <Helmet>
                <title>Majors - SCUMyDegree</title>
            </Helmet>
            <div className={styles['major-sections']}>
                {majorSections.map((major, index) => {
                    return <MajorSection key={index} section={major} />;
                })}
            </div>
        </div>
    );
}

export default MajorPage;