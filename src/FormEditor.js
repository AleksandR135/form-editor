import { useReducer, useState } from 'react';

import './App.css';
import EditorPanel from './Components/EditorPanel';
import FormPanel from './Components/FormPanel';

const insertByLineNumber = (schema, id, lineNumber,) => {
  if (lineNumber === 0) {
    return [id, ...schema];
  }

  if (lineNumber >= schema.length) {
    return [...schema, id];
  }

  return [...schema.slice(0, lineNumber), id, ...schema.slice(lineNumber + 1)]
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'add':
      return {
        schema: insertByLineNumber(state.schema, payload.id, state.schema.length),
        fieldsMap: {...state.fieldsMap, [payload.id]: payload}
      };
    case 'update':
      return {
        schema: [...state.schema],
        fieldsMap: {...state.fieldsMap, [payload.id]: payload}
      }
    default: 
      return state;
  }
};

const initialState = {schema: [], fieldsMap: {}};

function FormEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingFieldId, setEditingFieldId] = useState(null);
  const [importLink, setImportLink] = useState('');

  return (
        <div className="App">
            <EditorPanel
              dispatch={dispatch}
              fieldProps={state.fieldsMap[editingFieldId]}
              key={editingFieldId}
              setEditingFieldId={setEditingFieldId}
            />
            <FormPanel
              isEditMode={true}
              state={state}
              dispatch={dispatch}
              editingFieldId={editingFieldId}
              setEditingFieldId={setEditingFieldId}
            />
            <div className="importLink">
              <button
                onClick={() => {
                  setImportLink(`${document.location.host}/form/${encodeURI(JSON.stringify(state))}`)
                }}
              >
                Get import link
              </button>
              {importLink && <div>{importLink}</div>}
            </div>
          </div>
  );
}

export default FormEditor;
