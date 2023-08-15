import React from 'react'
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
        <div className='App'>
          <BrowserRouter>
          <Routes>
            <Route path='/'  element={<Login/>}/>
            <Route path='/signup'  element={<Signup/>}/>
            <Route path='/home'  element={<Home/>}/>

            </Routes>
            </BrowserRouter>
          <Login />
        </div>
  );
}

export default App;