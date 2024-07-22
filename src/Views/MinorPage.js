import { useState, useEffect } from 'react';
import styles from './MinorPage.module.css';
import MinorSection from '../Components/MinorSection';
import majorSections from '../Constants/majors';
import minorSections from '../Constants/minors';
import { Helmet } from 'react-helmet';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function MinorPage() {
    const { currentUser } = useAuth();

    const [selectedMinor, setSelectedMinor] = useState(null); // selected minor
    const [selectedSchool, setSelectedSchool] = useState(null); // the school of the user's major
    const [scienceMajor, setScienceMajor] = useState(false); // if the user is a science major
    
    useEffect (() => { // get the user's current minor and school
        const getCurrentInfo = async () => {
            if (currentUser) {
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);
    
                if (docSnap.exists()) {
                    const majorName = docSnap.data().major;
                    majorSections.forEach((section) => {
                        section.majors.forEach((major) => {
                            if (major.name === majorName) {
                                if (major.science) { // if the user is a science major
                                    setScienceMajor(true);
                                }
                            }
                        });
                    });

                    setSelectedMinor(docSnap.data().minor);
                    setSelectedSchool(docSnap.data().school);
                }
            }
        }

        getCurrentInfo();
    }, [currentUser]);

    const firstName = currentUser.displayName.split(' ')[0]; // get the user's first name

    return (
        <div className={styles['minor-page']}>
            <Helmet>
                <title>Minors - SCUMyDegree</title>
            </Helmet>
            <div className={styles['container']}>
                <div className={styles['left-half']}>
                    <h1>Minor</h1>
                    <p className={styles['text1']}>Hi, {firstName}! What are you studying?</p>
                    <p className={styles['text2']}>Note: You can always change this later in Settings.</p>
                </div>
                <div className={styles['right-half']}>
                    <div className={styles['minor-sections']}>
                        {minorSections.map((minor, index) => {
                            return <MinorSection 
                                key={index} 
                                section={minor} 
                                science={scienceMajor} 
                                selectedMinor={selectedMinor} 
                                setSelectedMinor={setSelectedMinor} 
                                selectedSchool={selectedSchool} 
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MinorPage;