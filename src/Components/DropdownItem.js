import styles from './DropdownItem.module.css'

function DropdownItem({ image, desc, action }) {
    return (
        <div className={styles['item-view']} title={desc} onClick={action}>
            <img className={styles['image-view']} src={image} alt={desc}/>
            <h3 className={styles['description']} >{desc}</h3>
        </div>
    );
};

export default DropdownItem