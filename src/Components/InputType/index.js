import React, {memo} from 'react';
import styles from './styles.module.scss';

function InputType({inputType, setInputType}) {
  return (
    <div className={styles.root} onChange={(e) => setInputType(e.target.value)}>
        <h3>
          Input type
        </h3>
        <label className={styles.item}>
          <input type="radio" name="inputType" value="text" checked={inputType === 'text'} />
          Text
        </label>
        <label className={styles.item}>
          <input type="radio" name="inputType" value="email" checked={inputType === 'email'} />
          Email
        </label>
        <label className={styles.item}>
          <input type="radio" name="inputType" value="phone" checked={inputType === 'phone'} />
          Phone
        </label>
        <label className={styles.item}>
          <input type="radio" name="inputType" value="number" checked={inputType === 'number'} />
          Number 
        </label>
      </div>
  )
}

export default memo(InputType);