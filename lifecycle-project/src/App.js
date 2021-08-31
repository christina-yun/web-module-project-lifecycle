import React from 'react';
import './App.css';
import FindUserForm from './Components/FindUserForm';
import MainUser from './Components/MainUser';
import Followers from './Components/Followers';

function App() {
  return (
    <div className="App">
      <h3>Who knows whom</h3>
      <FindUserForm />
      <MainUser />
      <Followers />
    </div>
  );
}

export default App;
