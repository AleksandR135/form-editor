import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import FormEditor from './FormEditor';
import FormViewer from './FormViewer';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FormEditor />}>
        
        </Route>
        <Route path="/form/:id" element={<FormViewer/>}>
          
        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;
