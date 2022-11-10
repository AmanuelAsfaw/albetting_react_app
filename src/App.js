import logo from './logo.svg';
// import './App.css';
import Home from './screens/home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Casher from './screens/casher';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route index element={<Home/>}/>
        <Route path='/casher' element={<Casher/>}>
          <Route index element={<Casher/>}/>
          <Route path='result' element={<Casher/>}/>
          <Route path='report' element={<Casher/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
