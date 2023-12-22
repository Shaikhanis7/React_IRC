import logo from './logo.svg';
import './App.css';
import Users from './Components/Users'
import  {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App
    ">
      
        <Routes>
          <Route path="/" element={<Users/>}/>
          {/* <Route path="/add" element={<AddUser/>}/>
          <Route path="/edit" element={<EditUser/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
