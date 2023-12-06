import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar title="This Is Title"/>
    <Routes>
      <Route path="/" element={ <TextForm></TextForm>}/>
      <Route path="/about" element={ <About></About>}/>
      <Route path="/home" element={ <Home></Home>}/>
    </Routes>
    
    </>
  );
}

export default App;
