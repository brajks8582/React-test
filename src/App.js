import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="3"/>
    <div className="container my-3" >

    <TextForm heading = "This is Form Heading"/>

    
    </div>
    </>
  );
}

export default App;
