
import AddEmployee from './AddEmployee';
import './App.css';
import EditEmployee from './EditEmployee';
import Home from './Home';
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddEmployee/>}/>
          <Route path="/edit/:empId" element={<EditEmployee/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
