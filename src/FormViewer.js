import { useParams } from 'react-router-dom';
import './App.css';
import FormPanel from './Components/FormPanel';


function FormViewer() {
  const {id: stringifyedState} = useParams();

  return (
        <div className="App">
          <FormPanel
            state={JSON.parse(stringifyedState)}
            dispatch={() => {}}
            editingFieldId={null}
            setEditingFieldId={() => {}}
          />
        </div>
  );
}

export default FormViewer;
