import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';
import Delete from './components/Delete';
import Search from './components/Search';
import Userblog from './components/Userblog';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Add />}></Route>
          <Route path='' element={<Login />}></Route>
          <Route path='/view' element={<View />}></Route>
          <Route path='Delete' element={<Delete />}></Route>
          <Route path='Search' element={<Search />}></Route>
          <Route path='userblog' element={<Userblog />}></Route>
          <Route path='regi' element={<Register />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
