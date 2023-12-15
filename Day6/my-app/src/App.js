
import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import About from './Pages/About';
import GridEg from './Components/GridEg';
function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
