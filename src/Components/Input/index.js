import React, {memo} from 'react';
import styles from './styles.module.scss';

function Input({name, label, isRequired, type, id}) {
  return (
    <label>
      <div className={styles.title}>{label} </div>
      <input className={styles.input} name={name} type={type} required={isRequired} />
    </label>
  )
}

export default memo(Input);