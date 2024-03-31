import styles from './MajorBox.module.css';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

function MajorBox({ major, school }) {
    const { currentUser } = useAuth();

    const handleMajorClick = (e) => {
        // TO DO: use e.target to highlight the box
        // OR use a state variable to highlight the box (preferred, the React way)
        
        if (currentUser) {
            setDoc(doc(db, 'users', currentUser.uid), {
                major: major.name,
                school: school
            }, { merge: true });
        }
    }

    return (
        <div 
            className={styles['major-box']}
            onClick={handleMajorClick}
        >
            <div className={styles['major-box-title']}>
                {major.name}
            </div>
        </div>
    );
}

export default MajorBox;