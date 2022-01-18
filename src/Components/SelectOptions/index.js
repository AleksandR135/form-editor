import React, {memo} from 'react';
import styles from './styles.module.scss';

function SelectOptions({selectOptions, setSelectOptions}) {
  return (
    <div className={styles.root} onChange={(e) => {
      const newOptions = [...selectOptions];
      newOptions[e.target.name] = e.target.value;
      return setSelectOptions(newOptions)
    }}>
      <h3>
        Select options
      </h3>
      {selectOptions.map((option, i) => (
        <input className={styles.item} type='text' key={i} name={i} value={option} />
      ))}
      
      <button onClick={() => setSelectOptions([...selectOptions, ''])}>Add select option</button>
    </div>
  );
}

export default memo(SelectOptions);