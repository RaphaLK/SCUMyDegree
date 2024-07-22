import { useState, useEffect } from 'react';
import styles from './MinorBox.module.css';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

function MinorBox({ science, minor, majorSchool, selectedMinor, setSelectedMinor, selectedSchool }) {
    const { currentUser } = useAuth();

    const [disabled, setDisabled] = useState(false); // if the minor is disabled

    const handleMinorClick = () => { // set the user's minor
        if (currentUser) {
            setDoc(doc(db, 'users', currentUser.uid), {
                minor:  minor.name === selectedMinor ? null : minor.name // if the minor is already selected, deselect it
            }, { merge: true });
        }

        setSelectedMinor(minor.name === selectedMinor ? null : minor.name); // if the minor is already selected, deselect it
    }

    useEffect(() => { // check if the minor should be disabled
        if (selectedSchool === null) { // if the user hasn't selected a major yet
            setDisabled(true);
        }
        else if (selectedSchool === majorSchool) { // if the minor is in the same school as the major
            setDisabled(false);
        } else if (minor.schools.includes(selectedSchool)) { // if user is in list of schools for minor
            setDisabled(false);
        } else if (minor.schools.includes('science') && science === true) { // if the minor is a science minor and the user is a science major
            setDisabled(false);
        } else { // otherwise, disable the minor
            setDisabled(true);
        }
    }, [selectedSchool, majorSchool, minor.schools, science]);

    return (
        <div 
            className={`${styles['minor-box']} ${selectedMinor === minor.name ? styles['selected'] : ''} ${disabled ? styles['disabled'] : ''}`}
            onClick={disabled ? null : handleMinorClick}
        >
            <div className={styles['minor-box-title']}>
                {minor.name}
            </div>
        </div>
    );
}

export default MinorBox;