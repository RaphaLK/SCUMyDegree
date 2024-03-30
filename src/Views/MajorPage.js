import styles from './MajorPage.module.css';
import MajorSection from '../Components/MajorSection';
import majorSections from '../Constants/majors';
import { Helmet } from 'react-helmet';
import { getFirebaseAuth } from '../firebase';
// import { auth } from '../firebase';
// import app from '../firebase';

function MajorPage() {
    const auth = getFirebaseAuth();
    console.log(auth.currentUser.uid);
    alert(auth.currentUser.uid);

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