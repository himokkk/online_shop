import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  //console.log = console.warn = console.error = () => {};

  return (
    <div className='min-w-screen overflow-x-hidden'>
      <div className=''>
        <HashRouter>
          <Routes>
              <Route path='/login' element={<div><LoginPage/></div>}></Route>
              <Route path='/signup' element={<div><SignupPage/></div>}></Route>
              <Route path='/' element={<div><HomePage/></div>}></Route>
              <Route path='/password/reset' element={<div><LoginPage/></div>}></Route>
              <Route path='/profile/:id' element={<div><ProfilePage/></div>}></Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
