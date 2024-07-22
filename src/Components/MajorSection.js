import styles from "./MajorSection.module.css";
import MajorBox from "./MajorBox";

function MajorSection({ section, selectedMajor, setSelectedMajor, selectedSchool, setSelectedSchool }) {
    return (
        <div className={styles['major-section']}>
            <div className={styles['major-title']}>
                {section.school}
            </div>
            <hr className={styles['section-line']} />
            <div className={styles['major-boxes']}>
                {section.majors.map((major, index) => {
                    return <MajorBox 
                        key={index} 
                        major={major} 
                        school={section.school} 
                        selectedMajor={selectedMajor} 
                        setSelectedMajor={setSelectedMajor} 
                        selectedSchool={selectedSchool} 
                        setSelectedSchool={setSelectedSchool} 
                    />
                })}
            </div>
        </div>
    );
}

export default MajorSection;