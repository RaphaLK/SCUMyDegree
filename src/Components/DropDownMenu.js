import styles from './DDM.module.css';
import DropDownItem from './DropDownItem';

const DropDownMenu = () => {
  
  return (
    <div className={styles['DropDownMenu_ViewContainer']}>
      <h3>
        <ul>
          <DropDownItem
            image = '/external/primaryi322-c8z6.svg' 
            desc = 'Edit Degree'/>
        </ul>
      </h3>
    </div>
  )
}

export default DropDownMenu