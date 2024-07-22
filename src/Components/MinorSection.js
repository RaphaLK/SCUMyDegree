import styles from "./MinorSection.module.css";
import MinorBox from "./MinorBox";

function MinorSection({ section, science, selectedMinor, setSelectedMinor, selectedSchool, setSelectedSchool }) {
    return (
        <div className={styles['minor-section']}>
            <div className={styles['minor-title']}>
                {section.school}
            </div>
            <hr className={styles['section-line']} />
            <div className={styles['minor-boxes']}>
                {section.minors.map((minor, index) => {
                    return <MinorBox 
                        key={index} 
                        science={science} 
                        minor={minor} 
                        majorSchool={section.school} 
                        selectedMinor={selectedMinor} 
                        setSelectedMinor={setSelectedMinor} 
                        selectedSchool={selectedSchool}
                    />
                })}
            </div>
        </div>
    );
}

export default MinorSection;