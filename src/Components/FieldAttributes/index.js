import React, {memo} from 'react';
import styles from './styles.module.scss';

function FieldAttributes({ fieldName, fieldLabel, isRequired, setFieldLabel, setFiledName, setIsRequired}) {
  return (
    <div className={styles.root}>
      <h3>Field attributes</h3>
        <label className={styles.item}>
          Name <input type="text" name="field-name" value={fieldName} onChange={(e) => setFiledName(e.target.value)} />
        </label>
        <label className={styles.item}>
          Title <input type="text" name="field-label" value={fieldLabel} onChange={(e) => setFieldLabel(e.target.value)} />
        </label>
        <label className={styles.item}>
          Required <input type="checkbox" name="isRequired" value="checkbox" checked={isRequired} onChange={(e) => setIsRequired(e.target.checked)} />
        </label>
    </div>
  )
}

export default memo(FieldAttributes);