import styles from './MDButton.module.css';

function MDButton(props) {
    return (
        <button className={styles['button']}>{props.text}</button>
    );
}

export default MDButton;