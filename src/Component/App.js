import '../Css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
    <div>  
      <Nav></Nav>
    </div>
    </BrowserRouter>
  );
}

export default App;
