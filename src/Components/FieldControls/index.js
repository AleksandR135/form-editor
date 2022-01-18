import React, {memo} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

function FieldControls({isEditing, children, id}) {
  return (
    <div
      className={cn(styles.root, {[styles.isEditing]: isEditing})}
    >
      {children}
      <button data-id={id} className={styles.editButton}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  )
}

export default memo(FieldControls);