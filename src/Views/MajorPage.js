import { useState, useEffect } from 'react';
import styles from './MajorPage.module.css';
import MajorSection from '../Components/MajorSection';
import majorSections from '../Constants/majors';
import { Helmet } from 'react-helmet';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function MajorPage() {
    const { currentUser } = useAuth();

    const [selectedMajor, setSelectedMajor] = useState(null); // selected major
    const [selectedSchool, setSelectedSchool] = useState(null); // the school of the user's major
    
    useEffect (() => { // get the user's current major and school
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
    }, [currentUser]);

    const firstName = currentUser.displayName.split(' ')[0]; // get the user's first name

    return (
        <div className={styles['major-page']}>
            <Helmet>
                <title>Majors - SCUMyDegree</title>
            </Helmet>
            <div className={styles['container']}>
                <div className={styles['left-half']}>
                    <h1>Major</h1>
                    <p className={styles['text1']}>Hi, {firstName}! What are you studying?</p>
                    <p className={styles['text2']}>Note: You can always change this later in Settings.</p>
                </div>
                <div className={styles['right-half']}>
                    <div className={styles['major-sections']}>
                        {majorSections.map((major, index) => {
                            return <MajorSection 
                                key={index} 
                                section={major} 
                                selectedMajor={selectedMajor} 
                                setSelectedMajor={setSelectedMajor} 
                                selectedSchool={selectedSchool} 
                                setSelectedSchool={setSelectedSchool} 
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MajorPage;