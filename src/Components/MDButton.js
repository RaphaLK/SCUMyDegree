import styles from './MDButton.module.css';

function MDButton({buttonFunc, text}) {
    return (
        <button className={styles['button']} onClick={buttonFunc}>{text}</button>
    );
}

export default MDButton;