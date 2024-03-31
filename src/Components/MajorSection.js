import styles from "./MajorSection.module.css";
import MajorBox from "./MajorBox";

function MajorSection({ section }) {
    return (
        <div className={styles['major-section']}>
            <div className={styles['major-title']}>
                {section.school}
            </div>
            <hr className={styles['section-line']} />
            <div className={styles['major-boxes']}>
                {section.majors.map((section, index) => {
                    return <MajorBox key={index} major={section} />;
                })}
            </div>
        </div>
    );
}

export default MajorSection;