import styles from './MajorBox.module.css';

function MajorBox({ major }) {
    return (
        <div className={styles['major-box']}>
            <div className={styles['major-box-title']}>
                {major.name}
            </div>
        </div>
    );
}

export default MajorBox;