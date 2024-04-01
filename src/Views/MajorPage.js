import { useState } from 'react';
import styles from './MajorPage.module.css';
import MajorSection from '../Components/MajorSection';
import majorSections from '../Constants/majors';
import { Helmet } from 'react-helmet';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';


function MajorPage() {
    const { currentUser } = useAuth();

    const [selectedMajor, setSelectedMajor] = useState(null);
    const [selectedSchool, setSelectedSchool] = useState(null);

    const getCurrentInfo = async () => {
        if (currentUser) {
            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setSelectedMajor(docSnap.data().major);
                setSelectedSchool(docSnap.data().school);
            }
        }
    }

    getCurrentInfo();

    return (
        <div className={styles['major-page']}>
            <Helmet>
                <title>Majors - SCUMyDegree</title>
            </Helmet>
            <div className={styles['major-sections']}>
                {majorSections.map((major, index) => {
                    return <MajorSection key={index} section={major} selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor} selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
                })}
            </div>
        </div>
    );
}

export default MajorPage;