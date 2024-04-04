import styles from './DropDownItem.module.css'

const DropDownItem = ({ image, desc }) => {
  
  return (
    <div className={styles['ItemView']}>
      <img className={styles['imageView']} src={image} alt=''/>
      <p className={styles['description']} >{desc}</p>
    </div>
  );
};

export default DropDownItem