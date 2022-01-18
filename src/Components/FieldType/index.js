import React, {memo} from 'react';
import styles from './styles.module.scss';

function FieldType({handleFieldChange, field}) {
  return (
    <div className={styles.root} onChange={handleFieldChange}>
        <h3>Field type</h3>
        <label className={styles.item}>
          <input type="radio" name="form-element" value="input" checked={field === 'input'} />
          Text 
        </label>
        <label className={styles.item}>
          <input type="radio" name="form-element" value="select" checked={field === 'select'} />
          Selection list 
        </label>
        <label className={styles.item}>
          <input type="radio" name="form-element" value="checkbox" checked={field === 'checkbox'}/>
          Checkbox 
        </label>
    </div>
  )
}

export default memo(FieldType);