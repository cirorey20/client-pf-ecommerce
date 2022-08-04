import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import Details from './components/Details/Details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Details/>}/> 
      </Routes>
    </div>
  );
}

export default App;
