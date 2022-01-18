import React, {memo, useCallback} from 'react';
import FieldControls from '../FieldControls';
import Input from '../Input';
import Select from '../Select';
import styles from './styles.module.scss';

const createField = (fieldProps, editingFieldId, isEditMode) => {
  const {field, id} = fieldProps;
  const Comp = field === 'select' ? Select : Input;
        
  return isEditMode ? (
  <FieldControls key={id} id={id} isEditing={editingFieldId === id}>
    <Comp {...fieldProps} />
  </FieldControls>
  ) : (
    <Comp key={id} {...fieldProps} />
  );
  
} 

function FormPanel({
  isEditMode,
  state,
  editingFieldId,
  setEditingFieldId
}) {
  const handleEditButtonClick = useCallback((e) => {
    const id = +e.target.dataset.id;

    if (id) {
      setEditingFieldId(id === editingFieldId ? null : id);
    }
  }, [setEditingFieldId, editingFieldId])

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{isEditMode ? 'FormPreview' : 'Form'}</h3>
      <div onClick={handleEditButtonClick}>
        {state.schema.map((id) => (
            createField(state.fieldsMap[id], editingFieldId, isEditMode)
        ))}
      </div>
    </div>
    
  )
}

export default memo(FormPanel);