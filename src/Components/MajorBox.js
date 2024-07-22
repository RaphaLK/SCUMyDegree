import styles from './MajorBox.module.css';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

function MajorBox({ major, school, selectedMajor, setSelectedMajor, selectedSchool, setSelectedSchool }) {
    const { currentUser } = useAuth();

    const handleMajorClick = () => { // set the user's major and school
        if (currentUser) {
            setDoc(doc(db, 'users', currentUser.uid), {
                major: major.name,
                school: school,
                minor: null // deselect the user's minor
            }, { merge: true });
        }

        setSelectedMajor(major.name);
        setSelectedSchool(school);
    }

    return (
        <div 
            className={`${styles['major-box']} ${selectedMajor === major.name && selectedSchool === school ? styles['selected'] : ''}`}
            onClick={handleMajorClick}
        >
            <div className={styles['major-box-title']}>
                {major.name}
            </div>
        </div>
    );
}

export default MajorBox;