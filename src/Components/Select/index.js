import React, {memo} from 'react';
import styles from './styles.module.scss';

function Select({name, label, isRequired, options}) {
  return (
    <label>
      <div className={styles.title}>{label}</div>
      <select className={styles.select} name={name} required={isRequired}>
        {options.map((option, i) => (
          <option key={i} name={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default memo(Select);