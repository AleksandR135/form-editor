import React, {useState, useCallback, memo} from 'react';
import FieldType from '../FieldType';
import FieldAttributes from '../FieldAttributes';
import InputType from '../InputType';
import SelectOptions from '../SelectOptions';
import styles from './styles.module.scss';

function EditorPanel({setEditingFieldId, fieldProps, dispatch}) {
  const [field, setField] = useState(fieldProps?.field || 'input');
  const [fieldName, setFieldName] = useState(fieldProps?.name);
  const [fieldLabel, setFieldLabel] = useState(fieldProps?.label);
  const [isRequired, setIsRequired] = useState(fieldProps?.isRequired);
  const [inputType, setInputType] = useState(fieldProps?.type || 'text');
  const [selectOptions, setSelectOptions] = useState(fieldProps?.options || []);

  const handleFieldChange = useCallback((e) => {
    setField(e.target.value);
  }, [field]);

  const handleButtonClick = useCallback(() => {
    dispatch({
      type: fieldProps ? 'update' : 'add',
      payload: {
        id: fieldProps?.id || Date.now(),
        field,
        type: field === 'checkbox' ? 'checkbox' : inputType,
        name: fieldName,
        label: fieldLabel,
        isRequired,
        options: selectOptions.filter(value => value.trim()),
      }
    });
    setEditingFieldId(null);
  }, [dispatch, setEditingFieldId, field, isRequired, selectOptions, fieldProps, fieldName, fieldLabel]);

  return (
    <div className={styles.root}>
      <FieldType handleFieldChange={handleFieldChange} field={field} />
      <FieldAttributes 
        fieldName={fieldName}
        fieldLabel={fieldLabel}
        isRequired={isRequired}
        setFieldName={setFieldName}
        setFieldLabel={setFieldLabel}
        setIsRequired={setIsRequired}
      />
      {field === 'input' && (
        <InputType inputType={inputType} setInputType={setInputType} />
      )}
      {field === 'select' && (
        <SelectOptions selectOptions={selectOptions} setSelectOptions={setSelectOptions} />
      )}
      <button className={styles.doneButton} onClick={handleButtonClick}>{fieldProps ? 'Save' : 'Add'}</button>
    </div>
  )
}

export default memo(EditorPanel);